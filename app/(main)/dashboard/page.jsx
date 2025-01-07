import { getUserAccounts } from '@/actions/dashboard'
import CreateAccountDrawer from '@/components/create-account-drawer'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'
import AccountCard from './_components/account-card'

const DashboardPage = async () => {

  const accounts = await getUserAccounts(); 

  return (
    <div className='px-5'>
        {/* Budget Progress */} 


        {/* Overview */}


        {/* Accounts Grid */}
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <CreateAccountDrawer>
            <Card className="hover:shadow-md transaction-shadow cursor-pointer border-b">
              <CardContent className="flex flex-col items-center justify-center h-full pt-5 text-muted-foreground">
                <Plus className='w-10 h-10 mb-2' />
                <p className='text-sm font-medium'>Add New Account</p>
              </CardContent>
            </Card>
          </CreateAccountDrawer>
          {
            accounts.length > 0 && accounts.map((account, index) => <AccountCard key={index} account={account} />)
          }
        </div>

    </div>
  )
}

export default DashboardPage