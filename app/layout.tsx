import type {Metadata, Viewport} from 'next'
import './globals.css'
import ReduxProvider from "@/app/redux/provider";
import dynamic from "next/dynamic";
import ReactQueryProvider from "@/app/utils/ReactQueryProvider";
import {ToastContainer} from "react-toastify";
import React from "react";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToastContainerApp from "@/app/utils/ToastContainer";


export const metadata: Metadata = {
    title: 'Trip Tour',
    description: 'Generated by create next app',
    manifest: '/manifest.json',
}
export const viewport: Viewport = {
    themeColor: "#FF7512",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ReactQueryProvider>
            <html lang="fa">
            <body className='font-body bg-white'>
            <ReduxProvider>
                <ToastContainerApp/>
                {children}
                <RegisterModal/>
            </ReduxProvider>
            </body>
            </html>
        </ReactQueryProvider>
    )
}
