import CreditCard from './credit-card/CreditCard'
import { FocusProvider } from './credit-card/context/FocusContext'

const App = () => (
    <FocusProvider>
        <div className="App">
            <CreditCard
                $style={{
                    justifyContent: 'center',
                    height: '100%',
                }}
                $cardFormStyle={{ width: 'auto', alignSelf: 'center' }}
            />
        </div>
    </FocusProvider>
)

export default App
