import { think } from 'cowsay'
import { initializeHighlighting } from './highlighter';

async function main() {
  console.log(think({
    text: 'Hmm... mencurigakan',
    eyes: 'Oo',
    tongue: 'MM'
  }));

  if (document.getElementById('error__alert')) {
    document.getElementById('error__alert').innerHTML = think({
      text: 'Ada yang nyasar nih, mending balik ajah',
      eyes: 'OO',
      tongue: 'MM'
    });
  }

  initializeHighlighting('11.10.0');
}

main();
