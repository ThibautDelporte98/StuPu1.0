
const LessonAbout = ({title, text, children}) => {

  return (

          <div className="about">
            <h2 className="mt-2">{title}</h2>
                {children}
          </div>
  );
};

export default LessonAbout;
