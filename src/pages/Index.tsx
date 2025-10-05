import { GrainGradient } from '@paper-design/shaders-react';

export default function Index() {
  return (
    <div style={{ alignItems: 'center', backgroundColor: '#FFFFFF', boxSizing: 'border-box', contain: 'content', display: 'flex', flexDirection: 'column', gap: 16, height: '100vh', justifyContent: 'center', overflowWrap: 'break-word', paddingBlock: 16, paddingInline: 16, transformOrigin: '0% 0%', width: '100vw' }}>
      <div style={{ alignSelf: 'stretch', borderRadius: '32px', boxSizing: 'border-box', contain: 'layout', flex: '1 0 0px', flexBasis: '0px', flexGrow: '1', flexShrink: '0', height: 'auto', overflowWrap: 'break-word', transformOrigin: '50% 50%', width: 'auto', position: 'relative' }}>
        <GrainGradient 
          colors={['#D30003', '#FFA395', '#FF8676', '#BE0003']} 
          colorBack="#00000000" 
          speed={1.38} 
          scale={0.71} 
          rotation={0} 
          offsetX={0} 
          offsetY={0} 
          softness={0.5} 
          intensity={0.5} 
          noise={0.25} 
          shape="corners" 
          style={{ borderRadius: '32px', height: '100%', left: '0', position: 'absolute', top: '0', width: '100%' }} 
        />
        <div style={{ alignItems: 'center', boxSizing: 'border-box', contain: 'layout', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'center', left: '0', overflowWrap: 'break-word', paddingBlock: 0, paddingInline: 0, position: 'absolute', top: '0', transformOrigin: '0% 0%', width: '100%' }}>
          <div style={{ alignItems: 'start', alignSelf: 'stretch', boxSizing: 'border-box', contain: 'layout', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: 0, height: 'fit-content', justifyContent: 'start', overflowWrap: 'break-word', paddingBlock: 0, paddingInline: 0, transformOrigin: '50% 50%', width: 'auto' }}>
            <div style={{ alignContent: 'center', alignSelf: 'stretch', boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: '"Instrument Serif", system-ui, sans-serif', fontSize: '24px', fontSynthesis: 'none', fontWeight: 400, height: 'fit-content', lineHeight: '150%', MozOsxFontSmoothing: 'grayscale', textAlign: 'center', transformOrigin: '50% 50%', WebkitFontSmoothing: 'antialiased', whiteSpace: 'pre-wrap', width: 'auto' }}>
              LoveFrame.
            </div>
            <div style={{ alignContent: 'center', alignSelf: 'stretch', boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: '"Instrument Serif", system-ui, sans-serif', fontSize: '24px', fontStyle: 'italic', fontSynthesis: 'none', fontWeight: 400, height: 'fit-content', lineHeight: '150%', MozOsxFontSmoothing: 'grayscale', textAlign: 'center', transformOrigin: '50% 50%', WebkitFontSmoothing: 'antialiased', whiteSpace: 'pre-wrap', width: 'auto' }}>
              We do it differently.
            </div>
          </div>
          <a 
            href="mailto:hi@tnad.xyz" 
            style={{ alignItems: 'start', backgroundColor: '#000000', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', contain: 'layout', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: 0, height: 'fit-content', justifyContent: 'start', overflowWrap: 'break-word', paddingBlock: '8px', paddingInline: '12px', transformOrigin: '50% 50%', width: 'fit-content', textDecoration: 'none', cursor: 'pointer' }}
          >
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', flexShrink: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontSynthesis: 'none', fontWeight: 400, height: 'fit-content', lineHeight: '150%', MozOsxFontSmoothing: 'grayscale', transformOrigin: '50% 50%', WebkitFontSmoothing: 'antialiased', whiteSpace: 'pre', width: 'fit-content' }}>
              Reach out
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
