// Components
import { FormNext, FormPrevious, Send } from 'grommet-icons'
import UserForm from './components/userForm'
import PreviewForm from './components/PreviewForm'
import SendForm from './components/SendForm'

// Hooks
import { useForm } from './hooks/UseForm'

// CSS
import './App.css'


function App() {

  const formComponents = [<UserForm />, <PreviewForm />, <SendForm />];

  // desestruturando o passos que estavam em formato de objeto
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h1>Solicitação de Acesso</h1>
        <p>Olá, seja Bem - Vindo ao sistema de Solicitação de acesso ás dependências da SEDAC.</p>
      </div>
      <div className="form-container">
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (<button type='button' onClick={() => changeStep(currentStep - 1)}>
              <FormPrevious />
              <span>Voltar</span>
            </button>)}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <FormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <Send />
              </button>)}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
