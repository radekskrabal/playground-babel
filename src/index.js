import Greeter from './Greeter';

$(document).ready(() => {
    let greeter = new Greeter('John');
    greeter.greet();
});