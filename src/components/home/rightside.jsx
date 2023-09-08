import MoreLinks from "./homeCompenents/moreLinks"
import { MapLocation } from "./homeCompenents/location"

const RightSide = () => {
    return <>
          <section className="right_side" id="right">
               <span><i className="fa fa-map-marker" aria-hidden="true"></i> CEE Local</span>
               <div id="Schoolmap">
                  <MapLocation lat={0} lng={15}/>
                </div>
              <MoreLinks/>
           </section>
    </>              
}

export default RightSide