import computer from './computer.png'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'

function App () {
  return (
    <div className='App'>
      <div className='App-container1'>
        <Header />

        <div className='Rest'>
          <div className='Body1'>
            <h1 className='Title'>DUMMY COMMENTS</h1>
            <h2 className='Sub-title'>
              Just woke up and you decided you'd like to scroll through some
              fake comments, we've got you!
            </h2>
            <Button text='Comments' link='/comments' />
          </div>

          <div className='Body2'>
            <div className='Body2-container'>
              <div className='Circle'>
                <img src={computer} className='Computer' />
              </div>

              <div className='Button-container'>
                <h1 className='Sub-title2'>
                  Check the rendering performance by clicking on the button
                  below.
                </h1>
                <Button text='Performance' link='/performance' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
