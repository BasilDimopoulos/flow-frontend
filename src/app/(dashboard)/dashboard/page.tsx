import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import { Fragment } from 'react'

const stats = [
  {
    name: 'Revenue',
    value: '$405,091.00',
    change: '+4.75%',
    changeType: 'positive',
  },
  {
    name: 'Overdue invoices',
    value: '$12,787.00',
    change: '+54.02%',
    changeType: 'negative',
  },
  {
    name: 'Outstanding invoices',
    value: '$245,988.00',
    change: '-1.39%',
    changeType: 'positive',
  },
  {
    name: 'Expenses',
    value: '$30,156.00',
    change: '+10.18%',
    changeType: 'negative',
  },
]

const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      <div>
        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 shadow-xs">
            <Gradient className="absolute inset-2 bottom-0 ring-1 ring-black/5 ring-inset" />
            <Container className="relative">
              <button
                type="button"
                // onClick={() => setSidebarOpen(true)}
                className="-m-2.5 p-2.5 text-white xl:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="size-5" />
              </button>

              <div className="mt-2 flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <form
                  action="#"
                  method="GET"
                  className="grid flex-1 grid-cols-1"
                >
                  <input
                    name="search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-white outline-hidden placeholder:text-gray-800 sm:text-sm/6"
                  />
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-800"
                  />
                </form>
              </div>
            </Container>
          </div>

          <main>
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 xl:px-10">
              <h1 className="text-base/7 font-semibold">Deployments</h1>

              {/* Sort dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center gap-x-1 text-sm/6 font-medium text-white">
                  Sort by
                  <ChevronUpDownIcon
                    aria-hidden="true"
                    className="size-5 text-gray-500"
                  />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                    >
                      Name
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                    >
                      Date updated
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                    >
                      Environment
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </header>

            <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
              <dl className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-10">
                {stats.map((stat, statIdx) => (
                  <div
                    key={stat.name}
                    className={classNames(
                      statIdx % 2 === 1
                        ? 'sm:border-l'
                        : statIdx === 2
                          ? 'lg:border-l'
                          : '',
                      'mb-10 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border border-gray-900/10 px-4 py-8 sm:px-6 xl:px-8',
                    )}
                  >
                    <dt className="text-sm/6 font-medium text-gray-500">
                      {stat.name}
                    </dt>
                    <dd
                      className={classNames(
                        stat.changeType === 'negative'
                          ? 'text-rose-600'
                          : 'text-gray-700',
                        'text-xs font-medium',
                      )}
                    >
                      {stat.change}
                    </dd>
                    <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div
              aria-hidden="true"
              className="absolute top-full left-0 -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-mt-10 sm:-ml-96 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
            >
              <div
                style={{
                  clipPath:
                    'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                }}
                className="aspect-1154/678 w-288.5 bg-linear-to-br from-[#FF80B5] to-[#9089FC]"
              />
            </div>

            <div className="space-y-16 py-16 xl:space-y-20">
              {/* Recent activity table */}
              <div>
                <div className="max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-10">
                  <h2 className="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none">
                    Recent activity
                  </h2>
                </div>
                <div className="mt-6 overflow-hidden border-t border-gray-100">
                  <div className="max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-10">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                      <table className="w-full text-left">
                        <thead className="sr-only">
                          <tr>
                            <th>Amount</th>
                            <th className="hidden sm:table-cell">Client</th>
                            <th>More details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {days.map((day) => (
                            <Fragment key={day.dateTime}>
                              <tr className="text-sm/6 text-gray-900">
                                <th
                                  scope="colgroup"
                                  colSpan={3}
                                  className="relative isolate py-2 font-semibold"
                                >
                                  <time dateTime={day.dateTime}>
                                    {day.date}
                                  </time>
                                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                                </th>
                              </tr>
                              {day.transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                  <td className="relative py-5 pr-6">
                                    <div className="flex gap-x-6">
                                      <transaction.icon
                                        aria-hidden="true"
                                        className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                      />
                                      <div className="flex-auto">
                                        <div className="flex items-start gap-x-3">
                                          <div className="text-sm/6 font-medium text-gray-900">
                                            {transaction.amount}
                                          </div>
                                          <div
                                            className={classNames(
                                              statuses[transaction.status],
                                              'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                                            )}
                                          >
                                            {transaction.status}
                                          </div>
                                        </div>
                                        {transaction.tax ? (
                                          <div className="mt-1 text-xs/5 text-gray-500">
                                            {transaction.tax} tax
                                          </div>
                                        ) : null}
                                      </div>
                                    </div>
                                    <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100" />
                                    <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                                  </td>
                                  <td className="hidden py-5 pr-6 sm:table-cell">
                                    <div className="text-sm/6 text-gray-900">
                                      {transaction.client}
                                    </div>
                                    <div className="mt-1 text-xs/5 text-gray-500">
                                      {transaction.description}
                                    </div>
                                  </td>
                                  <td className="py-5 text-right">
                                    <div className="flex justify-end">
                                      <a
                                        href={transaction.href}
                                        className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        View
                                        <span className="hidden sm:inline">
                                          {' '}
                                          transaction
                                        </span>
                                        <span className="sr-only">
                                          , invoice #{transaction.invoiceNumber}
                                          , {transaction.client}
                                        </span>
                                      </a>
                                    </div>
                                    <div className="mt-1 text-xs/5 text-gray-500">
                                      Invoice{' '}
                                      <span className="text-gray-900">
                                        #{transaction.invoiceNumber}
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
