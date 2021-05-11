'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  async activeGoals(ctx){
    console.log('return active goals', ctx.query)

    let ourDate = new Date();
    const pastDate = ourDate.getDate() - 8;
    ourDate.setDate(pastDate);

    //Log the date to our web console.
    // console.log(ourDate);



    const _goals = strapi.query('weekly-goals').find({Created_gt:ourDate, Done_ne:true, _sort:'Created:asc'})
    return _goals
  }
};
