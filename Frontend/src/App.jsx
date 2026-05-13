
import './App.css'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton
} from "@clerk/clerk-react"

function App() {
  

  return (
    <>
      <h1>welcome nitall</h1>
      <div>

        <SignedOut>
          <SignInButton mode='modal'>
            {/* hello */}
           <button >
              Log in
           </button>
          </SignInButton>
        </SignedOut>
        
        <SignedIn>
          <SignOutButton />
           <UserButton /> 
        </SignedIn>

       
      </div>
      
    </>
  )
}

export default App
