import React from 'react';

class MinMaxSum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '1 2 3 4 5',
      input2: '10 14',
      result1: '',
      result2: ''
    };
  }

  componentDidMount() {
    this.calculateMinMaxSum();
  }

  calculateMinMaxSum = () => {
    const { input1, input2 } = this.state;

    // Convert the input strings to arrays of numbers
    const numbers1 = input1.split(' ').map(Number);
    const numbers2 = input2.split(' ').map(Number);

    // Sort the arrays in ascending order
    const sortedNumbers1 = numbers1.sort((a, b) => a - b);
    const sortedNumbers2 = numbers2.sort((a, b) => a - b);

    // Calculate the sum of the smallest four numbers (minimum sum)
    const minSum1 = sortedNumbers1.slice(0, 4).reduce((sum, num) => sum + num, 0);
    const minSum2 = sortedNumbers2.slice(0, 4).reduce((sum, num) => sum + num, 0);

    // Calculate the sum of the largest four numbers (maximum sum)
    const maxSum1 = sortedNumbers1.slice(1).reduce((sum, num) => sum + num, 0);
    const maxSum2 = sortedNumbers2.slice(1).reduce((sum, num) => sum + num, 0);

    this.setState({
      result1: `${minSum1} ${maxSum1}`,
      result2: `${minSum2} ${maxSum2}`
    });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { input1, result1 } = this.state;

    return (
      <div>
        <h2>Minimum and Maximum Sums</h2>
        <div>
          <label>Input :</label>
          <input type="text" name="input1" value={input1} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Result :</label>
          <input type="text" value={result1} readOnly />
        </div>
        
        <button onClick={this.calculateMinMaxSum}>Calculate</button>
      </div>
    );
  }
}

export default MinMaxSum;
