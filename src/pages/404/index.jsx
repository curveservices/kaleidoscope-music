import { Link } from "react-router-dom";
import "./index.scss";

const NotFound = () => {
  return (
    <main className="not-found">
      
      <div className="not-found__background" aria-hidden="true">
        <span className="shape shape--pink" />
        <span className="shape shape--teal" />
        <span className="shape shape--yellow" />
        <span className="shape shape--violet" />
        <span className="shape shape--blue" />
      </div>
      <div className="not-found__content">
        
        <div className="not-found__number" aria-hidden="true">
          
          <span>4</span> <span className="not-found__zero">0</span>
          <span>4</span>
        </div>
        <div className="not-found__copy">
          
          <span className="eyebrow">Wrong note</span>
          <h1>
            
            Oops! You've wandered <span>off the musical map.</span>
          </h1>
          <p>
            
            The page you're looking for doesn't seem to be playing this
            particular tune.
          </p>
          <Link to="/" className="not-found__button">
            
            Back to the music <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="not-found__footer" aria-hidden="true">
        
        <span>MAKE MUSIC</span> <span>•</span>
        <span>FIND YOUR PEOPLE</span>
      </div>
    </main>
  );
};
export default NotFound;
