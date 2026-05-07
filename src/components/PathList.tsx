import { useState } from 'react';
import type { SampledPath, PrintParams } from '../types';
import { NumInput } from './NumInput';

interface Props {
  paths: SampledPath[];
  params: PrintParams;
  onToggle: (id: string) => void;
  onOverride: (
    id: string,
    key: 'ampNOverride' | 'ampTOverride' | 'wlNOverride' | 'wlTOverride',
    value: number | null,
  ) => void;
}

/** Inline chevron that rotates when collapsed */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className="path-chevron"
      width="9" height="9" viewBox="0 0 9 9"
      fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.15s' }}
    >
      <polyline points="1.5,3 4.5,6 7.5,3" />
    </svg>
  );
}

export function PathList({ paths, params, onToggle, onOverride }: Props) {
  // Start all paths expanded
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  if (paths.length === 0) return null;

  function toggleCollapse(id: string) {
    setCollapsed(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  return (
    <div className="path-list section">
      <div className="section-title">Rutas SVG ({paths.length})</div>
      {paths.map(path => {
        const isCollapsed = collapsed.has(path.id);
        const showBody    = path.enabled && !isCollapsed;

        return (
          <div key={path.id} className={`path-item ${path.enabled ? '' : 'path-disabled'}`}>

            {/* ── Header row ── */}
            <div className="path-item-header">

              {/* Checkbox — toggles enabled, does NOT collapse */}
              <input
                type="checkbox"
                checked={path.enabled}
                onChange={() => onToggle(path.id)}
                onClick={e => e.stopPropagation()}
              />

              {/* Clickable area — collapses/expands the override panel */}
              <button
                className="path-collapse-row"
                onClick={() => toggleCollapse(path.id)}
                title={isCollapsed ? 'Expandir' : 'Colapsar'}
              >
                <Chevron open={!isCollapsed} />
                <code>{path.id}</code>
                <span className="path-tag">{path.tagName}</span>
                <span className="path-len">{path.totalLength.toFixed(1)} u</span>
              </button>

            </div>

            {/* ── Override fields ── */}
            {showBody && (
              <div className="path-overrides">
                {([
                  { key: 'ampNOverride' as const, label: 'Amp N', unit: 'mm', ph: params.lissAmpN },
                  { key: 'ampTOverride' as const, label: 'Amp T', unit: 'mm', ph: params.lissAmpT },
                  { key: 'wlNOverride'  as const, label: 'λ N',   unit: 'mm', ph: params.lissWlN  },
                  { key: 'wlTOverride'  as const, label: 'λ T',   unit: 'mm', ph: params.lissWlT  },
                ]).map(({ key, label, unit, ph }) => (
                  <div className="param-row" key={key}>
                    <label>{label}<span className="unit"> {unit}</span></label>
                    <NumInput
                      min={0} step={0.5}
                      value={path[key] ?? ph}
                      placeholder={String(ph)}
                      onChange={v => onOverride(path.id, key, v)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
