import React, { useState } from 'react';
import { StyleSheet } from "react-native"
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '@/constants/Colors';

type Role = {
  id: string;
  name: string;
};

type RoleDropdownProps = {
  roles: Role[];
  onSelect: (roleId: string | null) => void;
};

const RoleDropdown: React.FC<RoleDropdownProps> = ({ roles, onSelect }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={roles.map(role => ({ label: role.name, value: role.id }))}
      setOpen={setOpen}
      setValue={(callback) => {
        const val = callback(value);
        setValue(val);
        onSelect(val);
      }}
      placeholder="Selecione um papel"
      zIndex={1000}
      // Aparência do campo
      style={styles.input}
      // Container externo
      containerStyle={styles.field}
      // Remove borda padrão
      dropDownContainerStyle={styles.dropdown}
      textStyle={styles.text}
      // Placeholder
      placeholderStyle={styles.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  field: {
    width: '100%',
    marginBottom: 16,
  },

  input: {
    backgroundColor: Colors.background_text_input,
    borderRadius: 12,
    minHeight: 58,
    paddingHorizontal: 16,

    // remove borda padrão do picker
    borderWidth: 0,

    // sombra igual ao input
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  text: {
    fontSize: 16,
    color: Colors.primary_text,
  },

  placeholder: {
    color: '#999',
  },

  dropdown: {
    backgroundColor: Colors.background_text_input,
    borderWidth: 0,
    borderRadius: 12,
    marginTop: 4,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default RoleDropdown;