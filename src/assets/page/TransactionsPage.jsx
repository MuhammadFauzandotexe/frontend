import Dashboard from "../layout/Dashboard";
import { useState } from 'react';

const TransactionPage = () =>{
    const handleRowClick = (rowData) => {
        console.log('Baris diklik:', rowData);
    }

    const users = [
        {
            name: 'Henry Cavill',
            purpose: 'Uang kenakalan tahun baru',
            approvedBy: 'Tom Holland',
            withdrawalDate: '31-Desember-2023',
            amount: 'Rp 7.000.000,-'
        },
        {
            name: 'Adam Warlock',
            purpose: 'Uang transport',
            approvedBy: 'Tom Holland',
            withdrawalDate: '30-Desember-2023',
            amount: 'Rp 1.000.000,-'
        },
        {
            name: 'Tobey Maguire',
            purpose: 'Uang transport',
            approvedBy: 'Tom Holland',
            withdrawalDate: '29-Desember-2023',
            amount: 'Rp 1.000.000,-'
        },
        {
            name: 'Drake Bell',
            purpose: 'Uang transport',
            approvedBy: 'Tom Holland',
            withdrawalDate: '29-Desember-2023',
            amount: 'Rp 1.000.000,-'
        },
        {
            name: 'Neil Patrick Harris',
            purpose: 'Acara makan kantor',
            approvedBy: 'Tom Holland',
            withdrawalDate: '18-Desember-2023',
            amount: 'Rp 900.000,-'
        },
        {
            name: 'Jason Segel',
            purpose: 'Pembelian perankat BTS baru',
            approvedBy: 'Tom Holland',
            withdrawalDate: '14-Desember-2023',
            amount: 'Rp 1.500.000,-'
        },
    ];
    

    return(
        <>
            <Dashboard pageName="Data Transaksi">
                <div class="relative overflow-x-auto rounded-md">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Keperluan
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Disetujui oleh
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tanggal penarikan
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nominal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => handleRowClick(user)}>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {user.purpose}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.approvedBy}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.withdrawalDate}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Dashboard>
        </>
    );
}
export default TransactionPage;
