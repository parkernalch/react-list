import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class CharacterList extends Component{
    state = {
        characters : [
            {id: uuid(), name: 'Hector'},
            {id: uuid(), name: 'Garen'},
            {id: uuid(), name: 'Sukorb'},
            {id: uuid(), name: 'Vik'},
        ]
    }

    render(){
        const { characters } = this.state;
        return(
            <Container>
                <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Character Name');
                        if(name){
                            this.setState(state => ({
                                characters: [...state.characters, {id: uuid(), name: name }]
                            }));
                        }
                    }}
                >Add Item</Button>

                <ListGroup>
                    <TransitionGroup className="character-list">
                        {characters.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                characters: state.characters.filter(character => character.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default CharacterList;