import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
} from "mdbreact";

const WEbDesignPage = () => {
  return (
    <section
      className="text-center my-5"
      id="design-web"
      style={{ marginLeft: 20, marginRight: 20 }}
    >
      <h2 className="h1-responsive font-weight-bold my-5">
        &lt;Design . Web . Projects/&gt;
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Here are a list of some of my web development projects, mostly full
        stack but I give utmost importance to the UI/UX aspect to keep my app
        intersting to my prospective users.
      </p>

      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <img
            src="https://github.com/arjaesj/timeless-recipes/blob/master/public/images/user-dashboard.png?raw=true"
            alt="Timeless Recipes App"
            className="img-fluid overlay rounded z-depth-1"
            style={{ height: 250, width: "100%" }}
          />
          <MDBView className="" waves>
            <a
              href="https://fast-reaches-40282.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Timeless Recipes</h4>
            <p className="grey-text">
              An online recipe book to create, edit or delete recipes or view
              other users' recipes developed in collaboration with{" "}
              <a
                href="https://github.com/robynheslop"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Robyn Heslop
              </a>{" "}
              &{" "}
              <a
                href="https://github.com/nitinmuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nitin Mukesh
              </a>
              .
            </p>
            <MDBBtn
              color="black"
              size="md"
              href="https://github.com/arjaesj/timeless-recipes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="github-square" className="left" /> Github Repo
            </MDBBtn>
            <MDBBtn
              color="black"
              size="md"
              href="https://fast-reaches-40282.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon icon="desktop" className="left" /> Deployed App
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>

        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <img
            src="https://github.com/arjaesj/mara-validator/blob/master/assets/images/readme/enter-code.png?raw=true"
            alt="Mara Validator App"
            className="img-fluid overlay rounded z-depth-1"
            style={{ height: 250, width: "100%" }}
          />
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Mara Validator</h4>
            <p className="grey-text">
              A HTML, CSS & Javascript source code validator created in
              collaboration with{" "}
              <a
                href="https://github.com/robynheslop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Robyn Heslop
              </a>{" "}
              &{" "}
              <a
                href="https://github.com/nitinmuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nitin Mukesh
              </a>
              .
            </p>
            <MDBBtn
              color="black"
              size="md"
              href="https://github.com/arjaesj/mara-validator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="github-square" className="left" /> Github Repo
            </MDBBtn>
            <MDBBtn
              color="black"
              size="md"
              href="https://arjaesj.github.io/mara-validator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon icon="desktop" className="left" /> Deployed App
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>

        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <img
            src="https://github.com/arjaesj/Javascript-Quiz-Game/blob/master/Assets/arjae_js_quiz_preview.gif?raw=true"
            alt="App Demo GIF"
            className="img-fluid overlay rounded z-depth-1"
            style={{ height: 250, width: "100%" }}
          />
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Javascript Quiz Game</h4>
            <p className="grey-text">
              Test your knowledge with this Javascript Quiz Game. You will be
              asked 5 questions about some fundamentals of Javascript.
            </p>
            <MDBBtn
              color="black"
              size="md"
              href="https://github.com/arjaesj/Javascript-Quiz-Game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="github-square" className="left" /> Github Repo
            </MDBBtn>
            <MDBBtn
              color="black"
              size="md"
              href="https://arjaesj.github.io/Javascript-Quiz-Game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon icon="desktop" className="left" /> Deployed App
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>

      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <img
            src="https://github.com/arjaesj/Weather-Dashboard/blob/master/Assets/images/read-me/demo-read-me.gif?raw=true"
            alt="App Demo GIF"
            className="img-fluid overlay rounded z-depth-1"
            style={{ height: 250, width: "100%" }}
          />
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Weather Dashboard</h4>
            <p className="grey-text">
              A graphical weather app that allows you to search for a City's
              current weather, temperature & humidity & 5 day forecast.
            </p>
            <MDBBtn
              color="black"
              size="md"
              href="https://github.com/arjaesj/Weather-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="github-square" className="left" /> Github Repo
            </MDBBtn>
            <MDBBtn
              color="black"
              size="md"
              href="https://arjaesj.github.io/Weather-Dashboard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon icon="desktop" className="left" /> Deployed App
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>

        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <img
            src="https://github.com/arjaesj/financial-transactions-auditor/blob/master/public/images/demo.gif?raw=true"
            alt="App Demo GIF"
            className="img-fluid overlay rounded z-depth-1"
            style={{ height: 250, width: "100%" }}
          />
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">
              Financial Transactions Auditor
            </h4>
            <p className="grey-text">
              An online/offline auditing app created using Node, Express and
              MongoDB that lets users track their finances ie, gains and losses.
            </p>
            <MDBBtn
              color="black"
              size="md"
              href="https://github.com/arjaesj/financial-transactions-auditor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="github-square" className="left" /> Github Repo
            </MDBBtn>
            <MDBBtn
              color="black"
              size="md"
              href="https://wers-mah-money.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon icon="desktop" className="left" /> Deployed App
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>

        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <img
            src="https://github.com/arjaesj/workout-tracker/blob/master/public/images/Fitness-Tracker.gif?raw=true"
            alt="App Demo GIF"
            className="img-fluid overlay rounded z-depth-1"
            style={{ height: 250, width: "100%" }}
          />
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Fitness Tracker</h4>
            <p className="grey-text">
              A workout tracking app created using Node, Express and MongoDB for
              tracking the tusers' daily workout.
            </p>
            <MDBBtn
              color="black"
              size="md"
              href="https://github.com/arjaesj/workout-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="github-square" className="left" /> Github Repo
            </MDBBtn>
            <MDBBtn
              color="black"
              size="md"
              href="https://lets-work-it-out.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon icon="desktop" className="left" /> Deployed App
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>

        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <img
            src="https://github.com/arjaesj/google-books-search/blob/main/images/demo.gif?raw=true"
            alt="App Demo GIF"
            className="img-fluid overlay rounded z-depth-1"
            style={{ height: 250, width: "100%" }}
          />
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Google Books Search</h4>
            <p className="grey-text">
              A React-based Google Books Search app using Node, Express and
              MongoDB so that users can save books to review or purchase later.
            </p>
            <MDBBtn
              color="black"
              size="md"
              href="https://github.com/arjaesj/google-books-search"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="github-square" className="left" /> Github Repo
            </MDBBtn>
            <MDBBtn
              color="black"
              size="md"
              href="https://find-my-book.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon icon="desktop" className="left" /> Deployed App
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default WEbDesignPage;
