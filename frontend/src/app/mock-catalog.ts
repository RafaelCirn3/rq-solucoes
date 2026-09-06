import { Company } from './models';

const img = (label: string) => `https://placehold.co/360x240?text=${encodeURIComponent(label)}`;

export const MOCK_COMPANIES: Company[] = [
  { id: 1, name: 'WIKA', description: 'Instrumentação de alta precisão para pressão, temperatura, nível e força.', products: [
    { id: 101, name: 'Manômetro Bourdon', model: '232.50', category: 'Pressão', application: 'Instrumentação', image: img('WIKA 232.50') },
    { id: 102, name: 'Transmissor de Pressão', model: 'A-10', category: 'Pressão', application: 'Processos industriais', image: img('WIKA A-10') },
    { id: 103, name: 'Termorresistência RTD', model: 'TR10', category: 'Temperatura', application: 'Instrumentação', image: img('WIKA TR10') }
  ]},
  { id: 2, name: 'Bürkert', description: 'Soluções em controle de fluidos com tecnologia, confiabilidade e inovação.', products: [
    { id: 201, name: 'Válvula Solenoide', model: '6014', category: 'Válvulas', application: 'Controle de fluidos', image: img('Bürkert 6014') },
    { id: 202, name: 'Válvula de Processo', model: '2300', category: 'Processo', application: 'Controle de processo', image: img('Bürkert 2300') },
    { id: 203, name: 'Válvula Proporcional', model: '2871', category: 'Controle', application: 'Dosagem', image: img('Bürkert 2871') }
  ]},
  { id: 3, name: 'KROHNE', description: 'Medição de vazão, nível, temperatura e análise de processos.', products: [
    { id: 301, name: 'Medidor de Vazão Eletromagnético', model: 'OPTIFLUX 2300', category: 'Vazão', application: 'Processos industriais', image: img('KROHNE OPTIFLUX') },
    { id: 302, name: 'Medidor de Vazão Ultrassônico', model: 'OPTISONIC', category: 'Vazão', application: 'Medição', image: img('KROHNE OPTISONIC') },
    { id: 303, name: 'Transmissor de Nível', model: 'OPTIWAVE', category: 'Nível', application: 'Processos industriais', image: img('KROHNE OPTIWAVE') }
  ]},
  { id: 4, name: 'Beckhoff', description: 'Tecnologia de automação e controle baseada em PC para alta performance.', products: [
    { id: 401, name: 'Controlador Industrial', model: 'CX', category: 'Automação', application: 'Controle industrial', image: img('Beckhoff CX') },
    { id: 402, name: 'I/O Modular', model: 'EL', category: 'I/O', application: 'Automação', image: img('Beckhoff EL') },
    { id: 403, name: 'Servo Drive', model: 'AX', category: 'Motion', application: 'Máquinas industriais', image: img('Beckhoff AX') }
  ]},
  { id: 5, name: 'SMC', description: 'Automação pneumática para produtividade e eficiência industrial.', products: [
    { id: 501, name: 'Cilindro Pneumático', model: 'CG1', category: 'Atuadores', application: 'Pneumática', image: img('SMC CG1') },
    { id: 502, name: 'Válvula Direcional', model: 'SY', category: 'Válvulas', application: 'Pneumática', image: img('SMC SY') },
    { id: 503, name: 'Unidade de Tratamento de Ar', model: 'AC', category: 'Preparação de ar', application: 'Pneumática', image: img('SMC AC') }
  ]},
  { id: 6, name: 'FLIR', description: 'Termografia e monitoramento para manutenção preditiva e inspeção industrial.', products: [
    { id: 601, name: 'Câmera Termográfica', model: 'T5xx', category: 'Termografia', application: 'Inspeção', image: img('FLIR T5xx') },
    { id: 602, name: 'Câmera Portátil', model: 'Exx', category: 'Inspeção', application: 'Manutenção', image: img('FLIR Exx') },
    { id: 603, name: 'Software de Análise', model: 'Thermal Studio', category: 'Software', application: 'Análise térmica', image: img('FLIR Thermal Studio') }
  ]}
];
