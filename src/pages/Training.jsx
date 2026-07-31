import React from 'react'
import TrainingHero from '../components/Training/TrainingHero'
import TrainingPrograms from '../components/Training/TrainingPrograms'
import TrainingProcess from '../components/Training/TrainingProcess'
import AboutTraining from '../components/Training/AboutTraining'
import ContactCTA from '../components/Training/ContactCTA'

const Training = () => {
  return (
    <div>
      <TrainingHero/>
      <TrainingPrograms/>
      <TrainingProcess/>
      <AboutTraining/>
      <ContactCTA/>
    </div>
  )
}

export default Training
