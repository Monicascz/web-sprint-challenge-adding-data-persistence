
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      await knex('projects').insert([
        {project_name: "Eat Lunch", project_description: "Decide what to eat, make it, then eat it", "project_completed": "false"}, // project_id: 1 
        {project_name: "Make something new", project_description: "Decide what to make, make it, then share your new skill", "project_completed": "false"}, //project_id: 2
      ]);
      await knex('tasks').insert([
        {project_id: 1, task_description: "decide what to eat", task_notes: "hungry", task_completed: "false" }, // LUNCH task_id: 1
        {project_id: 1, task_description: "make PBJ", task_notes: "need food", task_completed: "false" }, // LUNCH task_id: 2
        {project_id: 1, task_description: "eat PBJ", task_notes: "happy", task_completed: "false" }, // LUNCH task_id: 3
        {project_id: 2, task_description: "decide what to make", task_notes: "google it", task_completed: "false" }, // MAKE SOMETHING NEW task_id: 4
        {project_id: 2, task_description: "make gold ring", task_notes: "need materials", task_completed: "false" }, //MAKE SOMETHING NEW task_id: 5
        {project_id: 2, task_description: "enjoy new ring", task_notes: "hooray", task_completed: "false" } //MAKE SOMETHING NEW task_id: 6
      ]);
      await knex('resources').insert([
        {resource_name: "Peanut Butter", resource_description:"PB"}, // resource_id:1
        {resource_name: "Jelly", resource_description:"J"}, // resource_id:2
        {resource_name: "Gold", resource_description:"AU"}, // resource_id:3
      ]);
      await knex('project_resources').insert([
       {task_id: 2, resource_id:1}, //make PBJ requires PB
       {task_id: 2, resource_id:2}, // make PBJ requires J
       {task_id: 5, resource_id:3} // make gold ring requires AU
      ]);
};


// select t.task_id, t.task_description, t.task_notes, t.task_completed, project_name, project_description 
// from tasks as t
// left join projects as p
// on t.project_id = p.project_id
