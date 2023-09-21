import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Menu } from '@headlessui/react'

export default function TresPuntosCajas() {
    return (
      <Menu>
        <Menu.Button>{<PiDotsThreeVerticalBold/>}</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${active && 'border border-gray-300 rounded'}`}
              >
                Cajas
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    )
}