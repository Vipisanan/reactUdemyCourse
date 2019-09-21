import React from 'react'
import {connect} from "react-redux";

class CharacterList extends React.Component{
    render() {
        console.log("this.props" , this.props);

        return(
            <div>
                <ul>
                    {
                        this.props.characters.map(character =>{
                            return(
                              <li key={character.id}>
                                <p>{character.name}</p>
                              </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStatToProps(state) {
    console.log("mapStatetoProps : " , state);
    return {
        characters:state.characters
    };
}

export default connect(mapStatToProps , null)(CharacterList);