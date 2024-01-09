'use client'
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SuperAdminNavbar from "@/app/components/superAdmin/SuperAdminNavbar";
import SuperAdminSidebar from "@/app/components/superAdmin/SuperAdminSidebar";
import Button from "@/app/components/Button";
import ButtonTour from "@/app/components/superAdmin/ButtonTour";

const ResidencePanel = () => {
    const pathName = usePathname()
    const financialReport = [
        {
            id: 1,
            organizer: 'سیروسفر',
            origin: 'مازندران',
            destination: 'استانبول',
            level: '2 مرحله',
            score: '5,7',
            dlete : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">\n' +
                '  <path d="M11.4436 3.8V13.6C11.4436 13.9713 11.2797 14.3274 10.988 14.5899C10.6962 14.8525 10.3006 15 9.88802 15H2.11024C1.69768 15 1.30202 14.8525 1.0103 14.5899C0.718576 14.3274 0.554688 13.9713 0.554688 13.6V3.8M2.88802 3.8V2.4C2.88802 2.0287 3.05191 1.6726 3.34363 1.41005C3.63536 1.1475 4.03102 1 4.44358 1H7.55469C7.96725 1 8.36291 1.1475 8.65463 1.41005C8.94635 1.6726 9.11024 2.0287 9.11024 2.4V3.8" stroke="black" stroke-width="0.777778" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            edit : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z" stroke="black" stroke-width="0.655624" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            show : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M4.88867 1H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 8H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 15H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 1H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 8H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 15H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>
        },
        {
            id: 2,
            organizer: 'سیروسفر',
            origin: 'مازندران',
            destination: 'استانبول',
            level: '2 مرحله',
            score: '5,7',
            dlete : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">\n' +
                '  <path d="M11.4436 3.8V13.6C11.4436 13.9713 11.2797 14.3274 10.988 14.5899C10.6962 14.8525 10.3006 15 9.88802 15H2.11024C1.69768 15 1.30202 14.8525 1.0103 14.5899C0.718576 14.3274 0.554688 13.9713 0.554688 13.6V3.8M2.88802 3.8V2.4C2.88802 2.0287 3.05191 1.6726 3.34363 1.41005C3.63536 1.1475 4.03102 1 4.44358 1H7.55469C7.96725 1 8.36291 1.1475 8.65463 1.41005C8.94635 1.6726 9.11024 2.0287 9.11024 2.4V3.8" stroke="black" stroke-width="0.777778" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            edit : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z" stroke="black" stroke-width="0.655624" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            show : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M4.88867 1H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 8H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 15H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 1H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 8H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 15H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>
        },
        {
            id: 3,
            organizer: 'سیروسفر',
            origin: 'مازندران',
            destination: 'استانبول',
            level: '2 مرحله',
            score: '5,7',
            dlete : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">\n' +
                '  <path d="M11.4436 3.8V13.6C11.4436 13.9713 11.2797 14.3274 10.988 14.5899C10.6962 14.8525 10.3006 15 9.88802 15H2.11024C1.69768 15 1.30202 14.8525 1.0103 14.5899C0.718576 14.3274 0.554688 13.9713 0.554688 13.6V3.8M2.88802 3.8V2.4C2.88802 2.0287 3.05191 1.6726 3.34363 1.41005C3.63536 1.1475 4.03102 1 4.44358 1H7.55469C7.96725 1 8.36291 1.1475 8.65463 1.41005C8.94635 1.6726 9.11024 2.0287 9.11024 2.4V3.8" stroke="black" stroke-width="0.777778" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            edit : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z" stroke="black" stroke-width="0.655624" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            show : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M4.88867 1H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 8H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 15H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 1H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 8H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 15H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>
        },
        {
            id: 4,
            organizer: 'سیروسفر',
            origin: 'مازندران',
            destination: 'استانبول',
            level: '2 مرحله',
            score: '5,7',
            dlete : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">\n' +
                '  <path d="M11.4436 3.8V13.6C11.4436 13.9713 11.2797 14.3274 10.988 14.5899C10.6962 14.8525 10.3006 15 9.88802 15H2.11024C1.69768 15 1.30202 14.8525 1.0103 14.5899C0.718576 14.3274 0.554688 13.9713 0.554688 13.6V3.8M2.88802 3.8V2.4C2.88802 2.0287 3.05191 1.6726 3.34363 1.41005C3.63536 1.1475 4.03102 1 4.44358 1H7.55469C7.96725 1 8.36291 1.1475 8.65463 1.41005C8.94635 1.6726 9.11024 2.0287 9.11024 2.4V3.8" stroke="black" stroke-width="0.777778" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            edit : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z" stroke="black" stroke-width="0.655624" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            show : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M4.88867 1H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 8H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 15H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 1H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 8H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 15H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>
        },
        {
            id: 5,
            organizer: 'سیروسفر',
            origin: 'مازندران',
            destination: 'استانبول',
            level: '2 مرحله',
            score: '5,7',
            dlete : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">\n' +
                '  <path d="M11.4436 3.8V13.6C11.4436 13.9713 11.2797 14.3274 10.988 14.5899C10.6962 14.8525 10.3006 15 9.88802 15H2.11024C1.69768 15 1.30202 14.8525 1.0103 14.5899C0.718576 14.3274 0.554688 13.9713 0.554688 13.6V3.8M2.88802 3.8V2.4C2.88802 2.0287 3.05191 1.6726 3.34363 1.41005C3.63536 1.1475 4.03102 1 4.44358 1H7.55469C7.96725 1 8.36291 1.1475 8.65463 1.41005C8.94635 1.6726 9.11024 2.0287 9.11024 2.4V3.8" stroke="black" stroke-width="0.777778" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            edit : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z" stroke="black" stroke-width="0.655624" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            show : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M4.88867 1H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 8H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 15H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 1H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 8H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 15H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>
        }, {
            id: 6,
            organizer: 'سیروسفر',
            origin: 'مازندران',
            destination: 'استانبول',
            level: '2 مرحله',
            score: '5,7',
            dlete : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">\n' +
                '  <path d="M11.4436 3.8V13.6C11.4436 13.9713 11.2797 14.3274 10.988 14.5899C10.6962 14.8525 10.3006 15 9.88802 15H2.11024C1.69768 15 1.30202 14.8525 1.0103 14.5899C0.718576 14.3274 0.554688 13.9713 0.554688 13.6V3.8M2.88802 3.8V2.4C2.88802 2.0287 3.05191 1.6726 3.34363 1.41005C3.63536 1.1475 4.03102 1 4.44358 1H7.55469C7.96725 1 8.36291 1.1475 8.65463 1.41005C8.94635 1.6726 9.11024 2.0287 9.11024 2.4V3.8" stroke="black" stroke-width="0.777778" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            edit : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z" stroke="black" stroke-width="0.655624" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            show : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M4.88867 1H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 8H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 15H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 1H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 8H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 15H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>
        },
        {
            id: 7,
            organizer: 'سیروسفر',
            origin: 'مازندران',
            destination: 'استانبول',
            level: '2 مرحله',
            score: '5,7',
            dlete : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">\n' +
                '  <path d="M11.4436 3.8V13.6C11.4436 13.9713 11.2797 14.3274 10.988 14.5899C10.6962 14.8525 10.3006 15 9.88802 15H2.11024C1.69768 15 1.30202 14.8525 1.0103 14.5899C0.718576 14.3274 0.554688 13.9713 0.554688 13.6V3.8M2.88802 3.8V2.4C2.88802 2.0287 3.05191 1.6726 3.34363 1.41005C3.63536 1.1475 4.03102 1 4.44358 1H7.55469C7.96725 1 8.36291 1.1475 8.65463 1.41005C8.94635 1.6726 9.11024 2.0287 9.11024 2.4V3.8" stroke="black" stroke-width="0.777778" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            edit : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z" stroke="black" stroke-width="0.655624" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            show : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M4.88867 1H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 8H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 15H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 1H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 8H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 15H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>
        },
        {
            id: 8,
            organizer: 'سیروسفر',
            origin: 'مازندران',
            destination: 'استانبول',
            level: '2 مرحله',
            score: '5,7',
            dlete : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">\n' +
                '  <path d="M11.4436 3.8V13.6C11.4436 13.9713 11.2797 14.3274 10.988 14.5899C10.6962 14.8525 10.3006 15 9.88802 15H2.11024C1.69768 15 1.30202 14.8525 1.0103 14.5899C0.718576 14.3274 0.554688 13.9713 0.554688 13.6V3.8M2.88802 3.8V2.4C2.88802 2.0287 3.05191 1.6726 3.34363 1.41005C3.63536 1.1475 4.03102 1 4.44358 1H7.55469C7.96725 1 8.36291 1.1475 8.65463 1.41005C8.94635 1.6726 9.11024 2.0287 9.11024 2.4V3.8" stroke="black" stroke-width="0.777778" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            edit : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z" stroke="black" stroke-width="0.655624" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>,
            show : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
                '  <path d="M4.88867 1H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 8H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M4.88867 15H14.9992" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 1H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 8H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '  <path d="M1 15H1.00707" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>
        },

    ];
    return (
        <div className='flex flex-col gap-y-24'>
            <SuperAdminNavbar
                titelea= 'داخلی' titeleb='خارجی' titelec='' titeled=''  villaPath = '/superadmin/runningtours'
                apartmentsPath = '/superadmin/runningtours/foreign'
            />
            <div className='w-full justify-start py-8 flex gap-x-[7%]'>
                <SuperAdminSidebar/>
                <div className='w-full flex flex-col items-center gap-y-2 '>
                    <div className='w-[90%] flex lg:justify-end justify-center mx-auto gap-x-1 '>
                        <ButtonTour outline styles={'w-[20%] rounded-md bg-[#533FA1] text-[#242A50] border-[#000000] '}>تورهای برگزارشده</ButtonTour>
                        <ButtonTour  styles={'w-[30%] rounded-md bg-[#242A50] text-[#fff]  '}>افزودن تورهای جدید + </ButtonTour>
                    </div>
                    <table className='w-[90%] mx-auto text-center '>
                        <thead>
                        <tr className='text-white bg-[#3D4576] text-[12px] sm:text-[23px]'>
                            <th className='py-3 rounded-tr-[10px]'>
                                <div className='flex items-center gap-x-1 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>برگزارکننده</p>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center gap-x-1 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>مبدا</p>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center gap-x-1 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>مقصد</p>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center gap-x-1 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>برگزاری</p>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center gap-x-1 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>امتیاز</p>
                                </div>
                            </th>
                            <th className='w-[8%]'>
                                <div className='flex items-center gap-x-1 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>حذف</p>
                                </div>
                            </th>
                            <th className='w-[9%]'>
                                <div className='flex items-center gap-x-1 justify-center '>
                                    <p className='font-kalameh500 text-[16px]'>ویرایش</p>
                                </div>
                            </th>
                            <th className='rounded-tl-[10px] w-[9%]'>
                                <div className='flex items-center gap-x-1 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>مشاهده</p>
                                </div>
                            </th>


                        </tr>
                        </thead>
                        <tbody>
                        {financialReport.map(report => {
                            return (
                                <tr className='even:bg-[#F0F0F0] odd:bg-[#E9E4E4]'>
                                    <td className='py-4'>{report.organizer}</td>
                                    <td>{report.origin}</td>
                                    <td>{report.destination}</td>
                                    <td>{report.level}</td>
                                    <td>
                                        <div className='flex flex-row justify-center items-center gap-x-1'>
                                            {report.score}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                 viewBox="0 0 17 17" fill="none">
                                                <path
                                                    d="M8.5 1L10.8175 5.93691L16 6.73344L12.25 10.5741L13.135 16L8.5 13.4369L3.865 16L4.75 10.5741L1 6.73344L6.1825 5.93691L8.5 1Z"
                                                    fill="#FFD600" stroke="#FFD600" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </td>
                                    <td><div className='flex justify-center items-center'>{report.dlete}</div></td>
                                    <td><div className='flex justify-center items-center'>{report.edit}</div></td>
                                    <td><div className='flex justify-center items-center'>{report.show}</div></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ResidencePanel
