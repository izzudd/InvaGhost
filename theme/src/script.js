import { think } from 'cowsay'

console.log(think({
  text: 'Hmm... mencurigakan',
  eyes: 'Oo',
  tongue: 'MM'
}))

if (document.getElementById('error__alert')) document.getElementById('error__alert').innerHTML = think({
  text: 'Ada yang nyasar nih, mending balik ajah',
  eyes: 'OO',
  tongue: 'MM'
});
