import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCharacter } from '../actions/characterActions';

class CharacterModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newCharacter = {
            name: this.state.name
        }

        // Add Character via addCharacter Action
        this.props.addCharacter(newCharacter);

        // close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add Character</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add Character Name:</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="character">Character</Label>
                                <Input 
                                    type="text"
                                    name="name"
                                    id="character"
                                    placeholder="Add character name..."
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >   
                                    Add Character
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    character: state.character
});

export default connect(mapStateToProps, { addCharacter })(CharacterModal)