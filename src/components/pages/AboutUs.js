import NavBar from "../elements/NavBar";

const AboutUs = () => {
  return (
    <>
      <NavBar icon="fa fa-github" brand="GitHub Users" />
      <div className="container my-5 text-info card">
        <h2 className="p-5">This is About Us Page !</h2>
      </div>
    </>
  );
};

export default AboutUs;
