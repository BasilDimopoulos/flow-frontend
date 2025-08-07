import { ArrowLeftCircleIcon } from '@heroicons/react/16/solid'
import type { BusinessWizardStepProps } from './manualSetup'

export default function StepTwo({
  business,
  assistant,
  onBusinessUpdate,
  onAssistantUpdate,
  nextStepAction,
  backAction,
}: BusinessWizardStepProps) {
  const LeadNurtureSettings = [
    {
      id: 'no-sms-lead-nurture',
      name: 'None',
      description: 'Do not respond to leads automatically.',
    },
    {
      id: 'auto-sms-lead-nurture',
      name: 'Automatic Lead Nurturing',
      description:
        'Your lead representative will respond to leads messages for you automatically.',
    },
    {
      id: 'draft-sms-lead-nurture',
      name: 'Draft Lead Nurturing',
      description:
        'Your lead representative will create a draft for messages to leads that you can send manually on review.',
    },
  ]
  const FollowUpSettings = [
    {
      id: 'no-follow-up',
      name: 'None',
      description: 'Do not follow up leads that do not respond automatically.',
    },
    {
      id: 'auto-follow-up',
      name: 'Automatic Follow Up',
      description:
        'Your lead representative will follow up leads for you automatically.',
    },
  ]
  return (
    <div className="relative isolate h-screen bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  className="fill-white"
                />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
              <div
                aria-hidden="true"
                className="absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-10"
                />
              </div>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Setup up your personalized lead assistant
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Your lead assistant will respond to messages on your behalf,
              follow up on leads and represent your business.
            </p>
          </div>
        </div>
        <div className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
              <fieldset
                id="leadNurtureBehavior"
                aria-label="Privacy setting"
                className="-space-y-px rounded-md bg-white"
              >
                <p className="mb-2 text-sm font-bold text-gray-900/80">
                  Lead Nurture Behavior
                </p>
                {LeadNurtureSettings.map((setting) => (
                  <label
                    key={setting.id}
                    aria-label={setting.name}
                    aria-description={setting.description}
                    className="group flex border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50"
                  >
                    <input
                      value={setting.id}
                      checked={assistant.lead_nurture_behavior === setting.id}
                      onChange={() =>
                        onAssistantUpdate({ lead_nurture_behavior: setting.id })
                      }
                      name="leadNurtureSetting"
                      type="radio"
                      className="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <span className="ml-3 flex flex-col">
                      <span className="block text-sm font-medium text-gray-900 group-has-checked:text-indigo-900">
                        {setting.name}
                      </span>
                      <span className="block text-sm text-gray-500 group-has-checked:text-indigo-700">
                        {setting.description}
                      </span>
                    </span>
                  </label>
                ))}
              </fieldset>

              <fieldset
                aria-label="Privacy setting"
                className="-space-y-px rounded-md bg-white"
                id="followUpBehavior"
              >
                <p className="mb-2 text-sm font-bold text-gray-900/80">
                  Follow Up Behavior
                </p>
                {FollowUpSettings.map((setting) => (
                  <label
                    key={setting.id}
                    aria-label={setting.name}
                    aria-description={setting.description}
                    className="group flex border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50"
                  >
                    <input
                      value={setting.id}
                      checked={assistant.follow_up_behavior === setting.id}
                      onChange={() =>
                        onAssistantUpdate({ follow_up_behavior: setting.id })
                      }
                      name="followUpSetting"
                      type="radio"
                      className="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <span className="ml-3 flex flex-col">
                      <span className="block text-sm font-medium text-gray-900 group-has-checked:text-indigo-900">
                        {setting.name}
                      </span>
                      <span className="block text-sm text-gray-500 group-has-checked:text-indigo-700">
                        {setting.description}
                      </span>
                    </span>
                  </label>
                ))}
              </fieldset>
            </div>
            <div className="mt-8 flex justify-end gap-x-5">
              <div
                className="flex items-center gap-x-1"
                onClick={() => backAction()}
              >
                <ArrowLeftCircleIcon className="size-4 text-indigo-600" />
                <p className="font-semibold text-indigo-600">Back</p>
              </div>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => nextStepAction()}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
