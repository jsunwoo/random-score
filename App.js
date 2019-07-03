import React from "react";
import styled from "styled-components";
import { contents } from "./contents";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const AppRow = styled.View`
  width: 100%;
  margin: 50px 0px;
  align-items: center;
`;

const Text = styled.Text``;
const WhiteText = styled.Text`
  color: white;
`;

const Button = styled.TouchableOpacity`
  width: 65%;
  align-items: center;
  background-color: black;
  padding: 20px 0px;
  margin: 20px 0px;
  opacity: 0.7;
  /* border: solid 1px black; */
`;

const GrayButton = styled(Button)`
  width: 100%;
  background-color: gray;
`;

const pressed = () => {
  return alert("pressed");
};

export default class App extends React.Component {
  state = {
    score: 0,
    id: 0,
    content: "",
    firstValue: 0,
    secondValue: 0,
    randomNumber: 0
  };

  randomText = () => {
    const randomNumber = Math.floor(Math.random() * contents.length);
    this.setState({
      content: `${contents[randomNumber].content}`,
      firstValue: contents[randomNumber].valueOne,
      secondValue: contents[randomNumber].valueTwo,
      randomNumber: randomNumber
    });
    // console.log(content);
    console.log(randomNumber);
  };

  componentDidMount = () => {
    this.randomText();
  };

  firstButtonPressed = () => {
    const { score, firstValue } = this.state;
    this.setState({
      score: score + firstValue
    });
    this.randomText();
  };

  secondButtonPressed = () => {
    const { score, secondValue } = this.state;
    this.setState({
      score: score + secondValue
    });
    this.randomText();
  };

  render() {
    const { score, content } = this.state;

    return (
      <Container>
        <AppRow>
          <Text>{score}</Text>
        </AppRow>
        <AppRow>
          <Text>{content}</Text>
          <Button onPress={this.firstButtonPressed}>
            <WhiteText>버튼1</WhiteText>
          </Button>
          <Button onPress={this.secondButtonPressed}>
            <WhiteText>버튼2</WhiteText>
          </Button>
        </AppRow>
        <AppRow>
          <GrayButton onPress={pressed}>
            <WhiteText>가방</WhiteText>
          </GrayButton>
        </AppRow>
      </Container>
    );
  }
}
