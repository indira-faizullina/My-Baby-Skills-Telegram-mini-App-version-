import FormSection from "./components/FormSection/FormSection"
import Header from "./components/Header/Header"
import SkillsSection from "./components/SkillsSection/SkillsSection"
import Container from "./components/UI/Container/Container"
import { useState } from "react"

function App() {

  const [skills, setSkills] = useState([{
            id: 1,
            date: '07.07.2025',
            title: 'Первая улыбка',
        }
    ])

  return (
    <>
    <Container>
      <Header />
      <SkillsSection skills={skills} setSkills={setSkills}/>
      <FormSection skills={skills} setSkills={setSkills}/>
    </Container>
    </>
  )
}

export default App
