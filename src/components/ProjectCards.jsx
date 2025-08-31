import {listProject} from "./data"

const ProjectCards = ({ listProject }) => {
  return (
    <div className="Portfolio-box mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border border-white/50 rounded-xl bg-red-500">
      {listProject.map(project => (
        <div key={project.id} className="p-2 bg-zinc-800 items-center rounded-xl">
          <img
            src={project.img}
            alt=""
            className="p-1 rounded-xl h-50 w-full object-cover"
          />
          <div>
            <h4 className="font-bold p-1">{project.Project_name}</h4>
            <a href="">c</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
