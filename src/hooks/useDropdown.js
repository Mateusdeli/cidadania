import { useState } from 'react'

export default function useDropdown() {
    const [dropdownState, setDropdownState] = useState(false)

    function openDropdown() {
        setDropdownState(true)
    }

    function closeDropdown() {
        setDropdownState(false)
    }

    return [ dropdownState, openDropdown, closeDropdown ]
}