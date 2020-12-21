import { useToggleState } from "@react-stately/toggle";

function ToggleButton(props) {
    let ref = useRef();
    let state = useToggleState(props);
    let { buttonProps, isPressed } = useToggleButton(props, state, ref);

    return (
        <button
            {...buttonProps}
            
            }}
            ref={ref}
        >
            {props.children}
        </button>
    );
}

<ToggleButton>Test</ToggleButton>;
