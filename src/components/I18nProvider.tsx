"use client";

import { useEffect } from 'react';
import '@/i18n'; // Import the i18n configuration

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
