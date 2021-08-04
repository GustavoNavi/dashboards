import React, { useState, useRef, useEffect, RefObject } from 'react';
import {
  StyContainer,
  StyFakeBox,
  StyOptions,
  StyItems,
  StyItem,
  StyWrapper,
  StyFilterInput,
  StyFilterWrapper,
  StyIconsWrapper,
  StyLabel,
  StySelectedWrapper,
  StyPlaceholder,
  StySearchWrapper,
} from './styles';
import { DefaultTheme } from 'styled-components';
import { Sizes } from '../../ts/enum/componentSize';
import DashboardText from '../DashboardText';
import SelectArrowUp from '../../../assets/icons/SelectArrowUp';
import SelectArrowDown from '../../../assets/icons/SelectArrowDown';
import CloseXIcon from '../../../assets/icons/CloseXIcon';
import DashboardSearchIcon from '../../../assets/icons/SearchIcon';
import DashboardSeparatorLine from '../DashboardSeparatorLine';

interface IOption {
  value: string;
  label: string;
  icon?: JSX.Element;
}

interface IProps {
  options?: any;
  name: string;
  id: string;
  hasReset?: boolean;
  hasFilter?: boolean;
  maxRows?: number;
  onChange?: Function;
  formRef?: any;
  bindForm?: boolean;
  label?: string;
  width?: string;
  height?: Sizes;
  disabled?: boolean;
  disabledOptions?: any[];
  placeholder?: string;
  loading?: boolean;
  stateError?: boolean;
  customErrorMessage?: string;
  initialValue?: string;
  icons?: JSX.Element[];
  onReset?: Function;
  executeReset?: boolean;
  icon?: JSX.Element;
  initialIcon?: JSX.Element;
}

/**
 * @description Dashboard Selectbox Component.
 * @param id DOM identification Component.
 * @param name name used to found data in unForm and component name.
 * @param options SelectBox Options.
 * @param theme Componente theme.
 * @param onChange Function called on data values change.
 * @param bindForm if true the component will use unform instead state.
 * @param formRef Form reference.
 * @param hasReset Enables the option to reset values.
 * @param hasFilter Displays a search box.
 * @param maxRows Number of maximum rows that will be displayed when open state.
 * @param label Text describing field in form.
 * @param width Width select box.
 * @param height Height select box.
 * @param disabled Disables all select box block.
 * @param disabledOptions Disables all options inside the SelectBox with value in array.
 * @param placeholder Representing a short hint that describes the expected value.
 * @param loading Shows a loading animation.
 * @param stateError Enable error message.
 * @param customErrorMessage Custom error message.
 * @param initialValue Starting value of one of the selectbox options.
 * @param icons Displays icons in each option.
 * @param onReset Function called on data reset.
 * @param executeReset Execute automatic reset of properties.
 * @param icon Icon tied to label.
 * @param initialIcon Icon that is displayed next to the initial value.
 */

const getHeightBySize = (size: keyof typeof Sizes): number =>
({
  xxs: 10,
  lb: 15,
  xs: 20,
  sm: 25,
  md: 30,
  lg: 35,
  xl: 40,
}[size]);

const getFontBySize = (size: keyof typeof Sizes): number =>
({
  lb: 1.34,
  xxs: 1,
  xs: 1.17,
  sm: 1.34,
  md: 1.5,
  lg: 1.84,
  xl: 2.2,
}[size]);

const DashboardSelectBox: React.FC<IProps> = ({
  options = {},
  id,
  name,
  hasReset = false,
  hasFilter = true,
  maxRows = 4,
  onChange = () => null,
  bindForm = true,
  label = '',
  width = '180px',
  height = Sizes.lg,
  disabled = false,
  disabledOptions = [],
  placeholder = '',
  loading = false,
  initialValue,
  icons = [],
  onReset = () => null,
  executeReset = false,
  initialIcon,
  icon,
}) => {
  const [selected, setSelected] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);
  const [filter, setFilter] = useState<string>('');
  const optionsRef = useRef<HTMLDivElement>(null);
  const fakeSelectRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLInputElement>(null);
  const selectedLabel: any = options[selected];
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | undefined>();

  /**
   * @description Filter selectbox parsed options.
   * @param {array} list options list.
   * @returns filtered list.
   */
  function doFilter(list: Array<IOption>) {
    const filteredList: Array<IOption> = list.filter((option) => {
      const valueNormalize = option.label
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      const filterNormalize = filter
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      return (
        valueNormalize.toLowerCase().indexOf(filterNormalize.toLowerCase()) !==
        -1
      );
    });
    return filteredList;
  }

  /**
   * @description Parse selectbox options.
   * @returns parsed list.
   */
  function parseOptions() {
    const list: Array<IOption> = [];
    Object.keys(options).map((option: any, index: number) => {
      const item: IOption = { value: option, label: options[option] };
      if (icons.length > 0) Object.assign(item, { icon: icons[index] });
      list.push(item);
    });
    return hasFilter && filter ? doFilter(list) : list;
  }

  /**
   * @description Apply the selected item.
   * @param {object} option selected item object.
   */
  function handleSelect(
    option: IOption,
    isDisabled: boolean,
    icon?: JSX.Element
  ) {
    if (!isDisabled) {
      setOpen(false);
      setFilter('');
      setSelected(option.value);
      setSelectedIcon(icon || undefined);
      onChange && onChange(option.value, option.label);
    }
  }

  /**
   * @description Handle escape click.
   * @param {event} event event object.
   */
  function handleEscape(event: any) {
    if (
      !fakeSelectRef.current?.contains(event.target) &&
      !optionsRef.current?.contains(event.target)
    )
      setOpen(false);
  }

  /**
   * @description Reset select values.
   */
  function handleReset() {
    setSelected('');
    setOpen(false);
    setFilter('');
  }

  /** Event handlers. */
  useEffect(() => {
    document.addEventListener('click', handleEscape);
    bindForm && document.addEventListener('reset', handleReset);
    return () => {
      document.removeEventListener('click', handleEscape);
      bindForm && document.removeEventListener('reset', handleReset);
    };
  }, [bindForm]);

  /** Handle close action. */
  useEffect(() => {
    if (!open) setFilter('');
  }, [open]);

  /** Handle dynamicbox height changes. */
  useEffect(() => {
    if (open) {
      const dropDownHeight: number =
        document.getElementById(`${id}-drop-down-id`)?.getBoundingClientRect()
          .height || 0;
      const fakeboxHeight: number =
        document.getElementById(`${id}-fakebox-id`)?.getBoundingClientRect()
          .height || 0;
      setDynamicHeight(dropDownHeight + fakeboxHeight);
    } else setDynamicHeight(0);
  }, [open, filter]);

  /** Initialize value */
  useEffect(() => {
    if (initialValue) {
      const parsedOptions: IOption[] = parseOptions();
      setSelected(initialValue);
      if (parseInt(initialValue)) {
        parsedOptions.forEach((op: IOption) => {
          if (op.value === initialValue) {
            setSelected(op.value);
            setSelectedIcon(op.icon);
          }
        });
      } else {
        parsedOptions.forEach((op: IOption) => {
          if (op?.label?.toLowerCase() === initialValue?.toLowerCase()) {
            setSelected(op.value);
            setSelectedIcon(op.icon);
          }
        });
      }
    }
  }, [initialValue]);

  function handleResetOptions() {
    setSelected('');
    setFilter('');
    onReset && onReset();
  }

  useEffect(() => {
    if (!initialValue && Object.keys(options).length === 0) {
      setSelected('');
      setFilter('');
    }
  }, [options, initialValue]);

  useEffect(() => {
    if (executeReset) {
      handleResetOptions();
    }
  }, [executeReset]);

  return (
    <StyContainer
      id={`${id}-select-container-id`}
      hasLabel={label ? true : false}
      width={width}
    >
      <StyLabel
        disable={disabled}
      >
        <DashboardText
          value={label}
          size={Sizes.xs}
          fontWeight="600"
          icon={icon}
          color="rgb(255,255,255, 0.8)"
        />
      </StyLabel>
      <StyWrapper
        height={open ? dynamicHeight : 0}
        width="13vw"
        display={open ? 1 : 0}
      >
        <StyFakeBox
          id={`${id}-fakebox-id`}
          ref={fakeSelectRef}
          data-testid={`${id}-fakebox`}
          height={getHeightBySize(height)}
          isOpen={open}
          disable={disabled || loading}
          onClick={() => !disabled && !loading && setOpen(!open)}
          onKeyPress={() => setOpen(true)}
          tabIndex={0}
        >
          {selected === '' ? (
            <StyPlaceholder>
              {initialIcon}
              <DashboardText value={placeholder} size={Sizes.lb} hasMargin={true} />
            </StyPlaceholder>
          ) : selectedLabel ? (
            <StySelectedWrapper title={selectedLabel} disable={disabled}>
              {selectedIcon ? selectedIcon : initialIcon}
              <DashboardText value={selectedLabel} size={Sizes.lb} hasMargin={true} />
            </StySelectedWrapper>
          ) : (
            <StyLabel>
              <DashboardText value={placeholder} size={Sizes.lb} hasMargin={true} />
            </StyLabel>
          )}
          <StyIconsWrapper>
            {hasReset && selected !== '' && (
              <div
                id="close"
                onClick={() => handleResetOptions()}
                style={{ pointerEvents: disabled ? 'none' : 'all' }}
              >
                <CloseXIcon
                  height="8px"
                  width="8px"
                  fill='rgba(66,65,65,0.8)'
                />
              </div>
            )}
            <div id="arrow">
              {open ? (
                <SelectArrowUp
                  width="20px"
                  height="20px"
                  fill='rgba(66,65,65,0.8)'
                />
              ) : (
                <SelectArrowDown
                  width="20px"
                  height="20px"
                  fill='rgba(66,65,65,0.8)'
                />
              )}
            </div>
          </StyIconsWrapper>
          <input
            hidden
            name={name}
            value={selected}
            readOnly
            ref={selectRef}
            id={`${id}-select-id`}
            data-testid={`${id}-select-test-id`}
            autoComplete="off"
          />
        </StyFakeBox>
        {open && (
          <DropDownOptions
            options={options}
            handleSelect={handleSelect}
            parseOptions={parseOptions}
            hasFilter={hasFilter}
            filter={filter}
            setFilter={setFilter}
            isOpen={open}
            setOpen={setOpen}
            optionsRef={optionsRef}
            maxRows={maxRows}
            selected={selected}
            id={id}
            onReset={onReset}
            initialIcon={initialIcon}
            disabledOptions={disabledOptions}
          />
        )}
      </StyWrapper>
    </StyContainer>
  );
};

interface IDropDownProps {
  options: object;
  handleSelect: Function;
  selected: string;
  parseOptions: Function;
  hasFilter: boolean;
  filter: string;
  setFilter: Function;
  isOpen: boolean;
  optionsRef: RefObject<HTMLDivElement>;
  maxRows: number;
  id: string;
  onReset: any;
  theme?: DefaultTheme;
  initialIcon?: JSX.Element;
  setOpen: Function;
  disabledOptions?: any[];
}

const DropDownOptions: React.FC<IDropDownProps> = ({
  options,
  handleSelect,
  selected,
  parseOptions,
  hasFilter,
  filter,
  setFilter,
  optionsRef,
  maxRows,
  id,
  onReset,
  initialIcon,
  setOpen,
  disabledOptions,
}) => {
  /** Filter-input autofocus */
  useEffect(() => {
    document.getElementById(`${id}-filter-input`)?.focus();
  }, []);

  return (
    <StyOptions ref={optionsRef} id={`${id}-drop-down-id`}>
      <StyItems data-testid={id} maxRows={`${maxRows * 4}vh`}>
        {options &&
          parseOptions().map((option: IOption, index: number) => {
            const isDisabled = disabledOptions?.includes(option.value)
              ? true
              : false;
            return (
              <StyItem
                isSelected={selected ? option.value === selected : false}
                onClick={() => handleSelect(option, isDisabled, option.icon)}
                key={option.value}
                data-testid={`${id}-option-${option.value}`}
                tabIndex={0}
                onKeyPress={() => handleSelect(option, isDisabled, option.icon)}
                onBlur={() =>
                  Object.keys(options).length - 1 === index && setOpen(false)
                }
                isDisabled={isDisabled}
              >
                <div>
                  {option.icon ? option.icon : initialIcon}
                  <DashboardText value={option.label} size={Sizes.xs} bold={true} />
                </div>
              </StyItem>
            );
          })}
      </StyItems>
      {hasFilter && (
        <StyFilterWrapper>
          <StyFilterInput
            id={`${id}-filter-input`}
            onChange={(event: any) => setFilter(event.target.value)}
            onReset={onReset}
            value={filter}
            fontSize={getFontBySize(Sizes.xxs)}
            autoComplete="off"
          />
          <StySearchWrapper>
            <DashboardSeparatorLine
              height="25px"
              width="1px"
              backgroundColor="rgba(66,65,65)"
              margin="0 10px 0 0"
            />
            <DashboardSearchIcon
              fill='rgba(66,65,65,0.6)'
              height="20px"
              width="20px"
            />
          </StySearchWrapper>
        </StyFilterWrapper>
      )}
    </StyOptions>
  );
};

export default DashboardSelectBox;
