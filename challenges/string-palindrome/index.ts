import { containsPalindrome } from './solution';
import { IChallenge } from '../../types';

class StringPalindromeChallenge implements IChallenge {

  execute = function () {
    this.testData.forEach(element => {
      const { data, expected } = element;
      console.time('palindrome');
      const hasPalindrome = containsPalindrome(data);
      console.timeEnd('palindrome');

      console.log(`${expected === hasPalindrome ?'✔ - success!':'X - failure!'}`);
    });
  }

  testData = [
    {
      data: 'carrace',
      expected: true
    },
    {
      data: 'daily',
      expected: false
    },
    {
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper ligula eget odio lobortis, nec auctor nibh rhoncus. Donec rhoncus tincidunt ullamcorper. Cras cursus lacinia consectetur. Nulla eget ex nec libero semper consectetur. Nam fringilla, lectus et vulputate pretium, orci purus scelerisque enim, in pellentesque nulla nibh vitae elit. Sed ultricies eu purus ut pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Curabitur rutrum consectetur tellus. Fusce eget pretium nibh. Maecenas aliquam velit purus, at pharetra odio vehicula ut. Fusce nec ullamcorper quam. Integer accumsan volutpat orci. Mauris porta tincidunt est, vel hendrerit arcu tristique a. Pellentesque efficitur dui eu ullamcorper iaculis. Proin eu risus mauris. Etiam finibus tempus sem, quis ultricies justo condimentum et.  Etiam lacinia ligula sit amet diam blandit congue ac a eros. Curabitur egestas egestas urna in vestibulum. Pellentesque sit amet aliquet est. Morbi a quam sodales, placerat urna id, mattis nisi. Etiam et aliquam justo. Donec elementum pharetra turpis ac molestie. Etiam mattis nibh mi, dapibus pellentesque urna varius sed. Morbi et accumsan ligula, id fringilla lectus.  Ut non enim erat. Pellentesque at venenatis eros. Vivamus nibh massa, gravida eu velit in, sollicitudin aliquet dui. Aliquam orci erat, interdum a libero eu, egestas malesuada augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam tortor lacus, luctus sit amet tellus eget, imperdiet vehicula ipsum. Nullam vestibulum orci ex, vel vehicula massa posuere non. Proin tincidunt blandit risus et tincidunt. Donec rhoncus in orci id pulvinar.  Sed id elementum diam, at vulputate turpis. Donec euismod, metus eleifend mollis malesuada, magna ligula gravida lacus, vitae pellentesque velit orci a eros. Nunc eu hendrerit odio. Morbi efficitur luctus nulla, at semper nibh rutrum sed. Nulla tempus sodales urna non congue. Nullam tortor augue, vitae interdum ligula mollis consequat. Praesent ornare dapibus eros, in sagittis lacus. Morbi commodo augue ac scelerisque cursus. Duis pharetra eget felis ac lacinia.',
      expected: false
    },
    {
      data: new String(new Array(1000).fill('a')),
      expected: true
    }
  ]
  
}

export const challenge: IChallenge = new StringPalindromeChallenge();
