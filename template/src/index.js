import { render } from 'react-dom'
import './index.css'
import { Counter } from './Counter'

render(
  <div className="flex flex-col items-center p-10 gap-5">
    <h1 className="text-5xl font-bold">cra-template-learn</h1>
    <p>Create React App template to learn Web Development with Tailwind.</p>
    <Counter initial={2} />
  </div>,
  document.getElementById('root')
)
