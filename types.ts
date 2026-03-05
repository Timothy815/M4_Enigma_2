export enum RotorType {
  I = 'I',
  II = 'II',
  III = 'III',
  IV = 'IV',
  V = 'V',
  VI = 'VI',
  VII = 'VII',
  VIII = 'VIII',
  Beta = 'Beta',
  Gamma = 'Gamma',
}

export enum ReflectorType {
  B_Thin = 'B_Thin',
  C_Thin = 'C_Thin',
}

export interface RotorConfig {
  type: RotorType;
  wiring: string;
  notch: string; // Characters that cause the NEXT rotor to step when this rotor moves FROM
  position: number; // 0-25 (A-Z)
  ringSetting: number; // 0-25 (0 = A = no offset)
}

export interface MachineState {
  rotors: [RotorConfig, RotorConfig, RotorConfig, RotorConfig]; // [Greek, Left, Mid, Right]
  reflector: ReflectorType;
  plugboard: Record<string, string>; // 'A' -> 'B', 'B' -> 'A'
}

export interface EncryptResult {
  ciphertext: string;
  newState: MachineState;
  path: number[]; // For visualization (optional, maybe not fully implemented for perf)
}
