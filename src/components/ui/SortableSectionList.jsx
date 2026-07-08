import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Individual sortable item component
const SortableItem = ({ id, children, isEnabled, onToggle }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <div className={`flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm border ${isDragging ? 'border-blue-400 shadow-lg' : 'border-gray-100'}`}>
        {/* Drag Handle */}
        <div
          {...listeners}
          className="cursor-grab hover:cursor-grabbing text-gray-400 hover:text-gray-600 p-1"
          title="Drag to reorder"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => onToggle(id)}
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition flex-shrink-0 ${
            isEnabled
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
          }`}
        >
          {isEnabled ? '✓' : '×'}
        </button>

        {/* Label */}
        <span className="text-sm font-medium flex-1">
          {children}
        </span>

        {/* Status Badge */}
        <span className={`text-xs px-2 py-1 rounded-full ${
          isEnabled
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-400'
        }`}>
          {isEnabled ? 'Enabled' : 'Disabled'}
        </span>
      </div>
    </div>
  );
};

// Main SortableSectionList component
export function SortableSectionList({ items, onReorder, onToggle }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      const newOrder = arrayMove(items, oldIndex, newIndex);
      onReorder(newOrder);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map(item => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2">
          {items.map((item) => (
            <SortableItem
              key={item.id}
              id={item.id}
              isEnabled={item.enabled}
              onToggle={onToggle}
            >
              {item.icon} {item.label}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}