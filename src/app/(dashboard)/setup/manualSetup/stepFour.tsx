import type { BusinessWizardStepProps } from './manualSetup'

export default function StepThree({
  business,
  onBusinessUpdate: onUpdate,
  nextStepAction,
}: BusinessWizardStepProps) {
  const chatPersonalisation = [
    {
      id: 'professional',
      name: 'Professional',
      description:
        "Good morning, Ms. Lee. I hope you're well. I'm following up regarding the contract. Please let me know if you need any further details. Kind regards, James",
    },
    {
      id: 'semi-formal',
      name: 'Semi-Formal',
      description:
        'Hey David, just checking in on the proposal. Let me know if you’d like to jump on a quick call. Thanks!',
    },
    {
      id: 'casual',
      name: 'Casual / Friendly Professional',
      description:
        'Hey! Just sent over the doc — let me know what you think 😊 Happy to tweak anything if needed!',
    },
  ]
  const howManyMessages = [
    {
      id: 'no-hard-limit',
      name: 'Send as many messages until user feels comfortable converting',
      description:
        'This will allow your assistant to freely decide when to close the lead.',
    },
    {
      id: 'hard-limit',
      name: 'Set a hard limit.',
      description:
        'Set a hard limit of how many messages until the assistant goes to convert',
    },
  ]
  const conversionSettings = [
    {
      id: 'send-link',
      name: 'Send a link',
      description: 'Send a link to a customer to book or see more information.',
    },
    {
      id: 'send-link-to-enter-main-db',
      name: 'Send a link to your main software.',
      description:
        'Send a link to your main software to enter customer information there',
    },
    {
      id: 'google-calender-booking',
      name: 'Book via google calender integration.',
      description:
        'Your personalised assistant will use your google calendar availability and opening hours to book customers automatically for you.',
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
              Customise the messaging style of your assistant
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Tailor how your assistant messages and how it will convert leads.
            </p>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
              <fieldset
                id="leadNurtureBehavior"
                aria-label="Privacy setting"
                className="-space-y-px rounded-md bg-white"
              >
                <p className="mb-2 text-sm font-bold text-gray-900/80">
                  Messaging Style
                </p>
                {chatPersonalisation.map((setting) => (
                  <label
                    key={setting.id}
                    aria-label={setting.name}
                    aria-description={setting.description}
                    className="group flex border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50"
                  >
                    <input
                      defaultValue={setting.id}
                      defaultChecked={setting.id === 'public'}
                      name="chatPersonalisation"
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
                id="leadNurtureBehavior"
                aria-label="Privacy setting"
                className="-space-y-px rounded-md bg-white"
              >
                <p className="mb-2 text-sm font-bold text-gray-900/80">
                  Number of messages
                </p>
                {howManyMessages.map((setting) => (
                  <label
                    key={setting.id}
                    aria-label={setting.name}
                    aria-description={setting.description}
                    className="group flex border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50"
                  >
                    <input
                      defaultValue={setting.id}
                      defaultChecked={setting.id === 'public'}
                      name="howManyMessages"
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
                      {setting.id === 'hard-limit' && (
                        <div>
                          <div className="mt-2">
                            <input
                              id={`hardlimit-${setting.name}`}
                              name={`hardlimit-${setting.name}`}
                              type="number"
                              placeholder="5"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>
                      )}
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
                  Conversion Goal
                </p>
                {conversionSettings.map((setting) => (
                  <label
                    key={setting.id}
                    aria-label={setting.name}
                    aria-description={setting.description}
                    className="group flex border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50"
                  >
                    <input
                      defaultValue={setting.id}
                      defaultChecked={setting.id === 'public'}
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
                      <div>
                        <div className="mt-2">
                          <input
                            id={`link-${setting.name}`}
                            name={`link-${setting.name}`}
                            type="link"
                            placeholder="www.yourwebsite.com"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </span>
                  </label>
                ))}
              </fieldset>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
