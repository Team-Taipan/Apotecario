import React, { useState } from 'react';
import { StyleSheet} from "react-native"
import DropDownPicker from 'react-native-dropdown-picker';

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
      setValue={(val) => {
        setValue(val(String));
        onSelect(val(String));
      }}
      multiple={false} // seleção única
      placeholder="Selecione um papel"
      zIndex={1000}
    />
  );
};

const styles = StyleSheet.create({

})

export default RoleDropdown;