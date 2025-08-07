'use client'
import { createNewAssistant } from '@/app/api/assistant'
import { createNewBusiness, createNewBusinessUser } from '@/app/api/business'
import { type Assistant, type Business } from '@/models/models'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import StepOne from './stepOne'
import StepThree from './stepThree'
import StepTwo from './stepTwo'

export interface BusinessWizardStepProps {
  business: Partial<Business>
  assistant: Partial<Assistant>
  onBusinessUpdate: (updates: Partial<Business>) => void
  onAssistantUpdate: (updates: Partial<Assistant>) => void
  nextStepAction: () => void
  backAction: () => void
}

export default function ManualSetup() {
  const [currentPage, setCurrentPage] = useState('Page1')
  const [newBusiness, setNewBusiness] = useState<Partial<Business>>({})
  const [newAssistant, setNewAssistant] = useState<Partial<Assistant>>({})
  const router = useRouter()
  const NextStepAction = (page: string) => {
    setCurrentPage(page)
    console.log('Current Business: ', newBusiness)
  }
  const updateBusiness = (updates: Partial<Business>) => {
    setNewBusiness((prev) => ({ ...prev, ...updates }))
  }
  const updateAssistant = (updates: Partial<Assistant>) => {
    setNewAssistant((prev) => ({ ...prev, ...updates }))
  }
  console.log(newBusiness)

  const createNewBusinessAndAssistant = async () => {
    const newBusinessEntry = await createNewBusiness(newBusiness)
    console.log('New Business Entry: ', newBusinessEntry)
    const newAssistantEntry = await createNewAssistant(
      newAssistant,
      newBusinessEntry.id,
    )
    const createNewBusinessUserRelationship = await createNewBusinessUser(
      '3430d213-6a81-46fa-98a5-689120fd9dee',
      newBusinessEntry.id,
    )
    router.push(`/dashboard/${newBusinessEntry?.name}`)
  }

  return (
    <>
      {currentPage === 'Page1' && (
        <StepOne
          business={newBusiness}
          assistant={newAssistant}
          onBusinessUpdate={updateBusiness}
          onAssistantUpdate={updateAssistant}
          nextStepAction={() => NextStepAction('Page2')}
          backAction={() => NextStepAction('Page1')}
        />
      )}
      {currentPage === 'Page2' && (
        <StepTwo
          business={newBusiness}
          assistant={newAssistant}
          onBusinessUpdate={updateBusiness}
          onAssistantUpdate={updateAssistant}
          nextStepAction={() => NextStepAction('Page3')}
          backAction={() => NextStepAction('Page1')}
        />
      )}
      {currentPage === 'Page3' && (
        <StepThree
          business={newBusiness}
          assistant={newAssistant}
          onBusinessUpdate={updateBusiness}
          onAssistantUpdate={updateAssistant}
          nextStepAction={() => createNewBusinessAndAssistant()}
          backAction={() => NextStepAction('Page2')}
        />
      )}
    </>
  )
}
