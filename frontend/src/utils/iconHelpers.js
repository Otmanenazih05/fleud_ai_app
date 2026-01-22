export const getSummaryIconStyles = (title, source) => {
    // 1. Define Color Palettes (Tailwind classes)
    const PAIRS = [
        { bg: 'bg-blue-100', text: 'text-blue-500' },
        { bg: 'bg-purple-100', text: 'text-purple-500' },
        { bg: 'bg-cyan-100', text: 'text-cyan-500' },
        { bg: 'bg-lime-100', text: 'text-lime-600' },
        { bg: 'bg-yellow-100', text: 'text-yellow-600' },
        { bg: 'bg-orange-100', text: 'text-orange-500' },
        { bg: 'bg-pink-100', text: 'text-pink-500' },
        { bg: 'bg-indigo-100', text: 'text-indigo-500' },
        { bg: 'bg-emerald-100', text: 'text-emerald-500' },
    ];

    // 2. Define Icon Mappings based on keywords or source
    const lowerTitle = (title || '').toLowerCase();
    const lowerSource = (source || '').toLowerCase();

    let icon = 'fa-solid fa-file-lines'; // Default

    // Logic: Specific Keywords in Title -> Specific Icons
    if (lowerTitle.includes('variable') || lowerTitle.includes('code')) icon = 'fa-solid fa-code';
    else if (lowerTitle.includes('design') || lowerTitle.includes('art')) icon = 'fa-solid fa-pen-nib';
    else if (lowerTitle.includes('ux') || lowerTitle.includes('ui') || lowerTitle.includes('interface')) icon = 'fa-solid fa-layer-group';
    else if (lowerTitle.includes('image') || lowerTitle.includes('photo')) icon = 'fa-solid fa-image';
    else if (lowerTitle.includes('icon')) icon = 'fa-solid fa-icons';
    else if (lowerTitle.includes('video') || lowerTitle.includes('movie')) icon = 'fa-solid fa-clapperboard';
    else if (lowerTitle.includes('music') || lowerTitle.includes('audio')) icon = 'fa-solid fa-music';
    else if (lowerTitle.includes('trend')) icon = 'fa-solid fa-arrow-trend-up';

    // Logic: Source-based overrides (optional, can take precedence)
    if (lowerSource.includes('youtube')) icon = 'fa-brands fa-youtube';
    else if (lowerSource.includes('figma')) icon = 'fa-brands fa-figma';
    else if (lowerSource.includes('github')) icon = 'fa-brands fa-github';
    // Add more brands as needed

    // 3. Generate a consistent color based on the title string
    let hash = 0;
    const str = title + source;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colorIndex = Math.abs(hash % PAIRS.length);
    const colors = PAIRS[colorIndex];

    return {
        containerClass: `w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text}`,
        iconClass: `${icon} text-lg`
    };
};
