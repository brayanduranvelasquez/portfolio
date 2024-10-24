"use client"

import { useParams, useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const languages = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const params = useParams()
  const currentLocale = params.locale 

  const changeLanguage = (lang) => {
    const currentPath = window.location.pathname.split('/').slice(2).join('/')
    window.location.href = `/${lang}/${currentPath}`
  }

  return (
    <Select value={currentLocale} onValueChange={changeLanguage}>
      <SelectTrigger className="w-[60px]">
        <SelectValue>
          {currentLocale ? currentLocale.toUpperCase() : "EN"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}