import Knex from 'knex';
import db from '../database/connection';
import convert from '../functions/hourToMinutes';

interface ScheduleItem {
   week_day: number;
   from: string;
   to: string;
}
interface RequestCreateDTO {
   name: string;
   avatar: string;
   whatsapp: string;
   bio: string;
   subject: string;
   cost: number
   schedule: [];
}
interface RequestFiltersDTO {
   week_day: number;
   subject: string;
   time: number;
}
class ClassesController {
   public async index(filters: RequestFiltersDTO) {

      if (!filters.week_day || !filters.subject || !filters.time) {
         throw new Error('Missing filters');

      }

      const timeConverted = convert(String(filters.time));


      const filteredClasses =
         await db('classes')
            .whereExists(function () {
               this.select('class_schedule.*')
                  .from('class_schedule')
                  .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                  .whereRaw('`class_schedule`.`week_day` = ??', [Number(filters.week_day)])
                  .whereRaw('`class_schedule`.`from` <= ??', [timeConverted])
                  .whereRaw('`class_schedule`.`to` > ??', [timeConverted])


            })
            .where('classes.subject', '=', filters.subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])




      return filteredClasses;

   }


   public async create({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
   }: RequestCreateDTO) {
      const trx = await db.transaction();

      try {
         const usersIds = await trx('users')
            .insert({
               name,
               avatar,
               whatsapp,
               bio
            });



         const classesIds = await trx('classes')
            .insert({
               subject,
               cost,
               user_id: usersIds[0]
            });

         const classScheduleIds = schedule.map((scheduleItem: ScheduleItem) => (
            {
               class_id: classesIds[0],
               week_day: scheduleItem['week_day'],
               from: convert(scheduleItem['from']),
               to: convert(scheduleItem['to']),
            }
         ));

         const scheduleIds = await trx('class_schedule')
            .insert(classScheduleIds);

         await trx.commit();

         return { usersIds, classesIds, scheduleIds }
      } catch (error) {
         await trx.rollback();
         throw new Error('Undefined error');

      }
   }

}



export default ClassesController;
