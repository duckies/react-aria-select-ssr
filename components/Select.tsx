import { useRef } from "react";
import { mergeProps, useButton, useFocusRing, useSelect } from "react-aria";
import { useSelectState, SelectProps } from "react-stately";
import { SelectorIcon } from "@heroicons/react/solid";
import { ListBox } from "components/ListBox";
import { Popover } from "components/Popover";

export function Select<T extends object>(props: SelectProps<T>) {
  const state = useSelectState(props);

  const ref = useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

  const { buttonProps } = useButton(triggerProps, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div className="inline-flex flex-col relative w-52 mt-4">
      <div {...labelProps}>{props.label}</div>
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={`p-1 pl-3 py-1 relative inline-flex flex-row items-center justify-between rounded-md overflow-hidden cursor-default shadow-sm border-2 outline-none ${
          isFocusVisible ? "border-pink-500" : "border-gray-300"
        } ${state.isOpen ? "bg-gray-100" : "bg-white"}`}
      >
        <span
          {...valueProps}
          className={`text-md ${
            state.selectedItem ? "text-gray-800" : "text-gray-500"
          }`}
        >
          {state.selectedItem
            ? state.selectedItem.rendered
            : "Select an option"}
        </span>
        <SelectorIcon
          className={`w-5 h-5 ${
            isFocusVisible ? "text-pink-500" : "text-gray-500"
          }`}
        />
      </button>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={ref}
          placement="bottom start"
          className="w-52"
        >
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
}
