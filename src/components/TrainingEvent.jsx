import React from 'react';
import "../styles/Upcomingitem.css"


// get the list of events like UpcomingItem and then change them to input fields

const TrainingEvent = () => {
  return (
    <div>
       <p>
      <lineitem class="training-entry">
        <p>Enter a new training event here:</p>
        <day class="lineitem day">
          Day:
          <input type="text" >
          </input>
        </day>
        <time class="lineitem time">
          Time:
          <input type="text" >
            </input>
        </time>
        <type class="lineitem type">
          training:
          <input type="text" >
          </input>
        </type>
        <instructor class="lineitem instructor">
          Instructor:
          <input type="text" >
          </input>
        </instructor>     
        <input type="submit" value="Submit" />   
      </lineitem>
      </p>
    </div>
  )
}

export default TrainingEvent