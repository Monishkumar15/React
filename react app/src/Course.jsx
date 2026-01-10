import defaultImage from './assets/default.jpg';
import PropTypes from 'prop-types';

function Course({
  image = defaultImage,
  title = "Default Course Title",
  description = "This is a default description for the course."
}) {
  return (
    <div className="course">
      <img src={image} alt="image display" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// function Course({
//   image,
//   title = "Default Course Title",
//   description
// }) {
//   return (
//     <div className="course">
//       {image && <img src={image} alt="image display" />}

//       <h3>{title}</h3>

//       {description ? (
//         <p>{description}</p>
//       ) : (
//         <p className="muted">No description available</p>
//       )}
//     </div>
//   );
// }

Course.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};
export default Course;
