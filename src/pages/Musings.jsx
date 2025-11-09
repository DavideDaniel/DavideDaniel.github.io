/**
 * @file Musings.jsx
 * @ai-context Main page component for the Musings content hub.
 *
 * This component provides a searchable, organized interface for viewing markdown content
 * about AI's impact on software engineering. Features include:
 * - Search functionality across titles, excerpts, and topics
 * - Filtering by category and topic
 * - Date-based organization
 * - Markdown rendering with syntax highlighting
 * - Responsive grid layout matching the site's design system
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/Musings.css';

/**
 * Musings component - A gitbook-style content hub for AI engineering topics
 * @returns {JSX.Element} The rendered Musings page
 */
const Musings = () => {
  // State management
  const [musings, setMusings] = useState([]);
  const [filteredMusings, setFilteredMusings] = useState([]);
  const [selectedMusing, setSelectedMusing] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch musings manifest on component mount
  useEffect(() => {
    const fetchMusings = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/content/musings-manifest.json');
        if (!response.ok) {
          throw new Error('Failed to load musings manifest');
        }
        const data = await response.json();
        setMusings(data.musings);
        setFilteredMusings(data.musings);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchMusings();
  }, []);

  // Filter musings based on search and filters
  useEffect(() => {
    let filtered = [...musings];

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (musing) =>
          musing.title.toLowerCase().includes(searchLower) ||
          musing.excerpt.toLowerCase().includes(searchLower) ||
          musing.topics.some((topic) =>
            topic.toLowerCase().includes(searchLower)
          )
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (musing) => musing.category === selectedCategory
      );
    }

    // Topic filter
    if (selectedTopic !== 'All') {
      filtered = filtered.filter((musing) =>
        musing.topics.includes(selectedTopic)
      );
    }

    setFilteredMusings(filtered);
  }, [searchTerm, selectedCategory, selectedTopic, musings]);

  // Load markdown content when a musing is selected
  useEffect(() => {
    const loadMarkdown = async () => {
      if (!selectedMusing) {
        setMarkdownContent('');
        return;
      }

      try {
        const response = await fetch(selectedMusing.file);
        if (!response.ok) {
          throw new Error('Failed to load markdown content');
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (err) {
        setMarkdownContent(`# Error Loading Content\n\n${err.message}`);
      }
    };

    loadMarkdown();
  }, [selectedMusing]);

  // Extract unique categories and topics
  const categories = ['All', ...new Set(musings.map((m) => m.category))];
  const allTopics = musings.flatMap((m) => m.topics);
  const topics = ['All', ...new Set(allTopics)];

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Handle musing selection
  const handleMusingClick = (musing) => {
    setSelectedMusing(musing);
    // Scroll to top of content area
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to list
  const handleBackToList = () => {
    setSelectedMusing(null);
    setMarkdownContent('');
  };

  // Render loading state
  if (isLoading) {
    return (
      <div className="musings-page">
        <div className="musings-container">
          <div className="loading">Loading musings...</div>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="musings-page">
        <div className="musings-container">
          <div className="error">
            <h2>Error Loading Content</h2>
            <p>{error}</p>
            <Link to="/" className="btn-back">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  // Render article view when a musing is selected
  if (selectedMusing) {
    return (
      <div className="musings-page">
        <div className="musings-container">
          <div className="article-view">
            <div className="article-header">
              <button onClick={handleBackToList} className="btn-back">
                ← Back to Musings
              </button>
              <div className="article-meta">
                <span className="article-category">{selectedMusing.category}</span>
                <span className="article-date">{formatDate(selectedMusing.date)}</span>
              </div>
              <h1 className="article-title">{selectedMusing.title}</h1>
              <div className="article-topics">
                {selectedMusing.topics.map((topic, index) => (
                  <span key={index} className="topic-tag">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div className="article-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render list view (default)
  return (
    <div className="musings-page">
      <div className="musings-container">
        {/* Header */}
        <header className="musings-header">
          <Link to="/" className="btn-home">← Home</Link>
          <h1>Musings on AI Engineering</h1>
          <p className="header-description">
            Practical insights on AI's impact on software engineering—covering
            workflows, tools, and best practices for modern development.
          </p>
        </header>

        {/* Search and Filters */}
        <div className="musings-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search musings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filters">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="filter-select"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic === 'All' ? 'All Topics' : topic}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="results-info">
          {filteredMusings.length === 0 ? (
            <p>No musings found matching your criteria.</p>
          ) : (
            <p>
              Showing {filteredMusings.length} of {musings.length} musing
              {musings.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Musings Grid */}
        <div className="musings-grid">
          {filteredMusings.map((musing) => (
            <article
              key={musing.id}
              className="musing-card"
              onClick={() => handleMusingClick(musing)}
            >
              <div className="card-header">
                <span className="card-category">{musing.category}</span>
                <span className="card-date">{formatDate(musing.date)}</span>
              </div>
              <h2 className="card-title">{musing.title}</h2>
              <p className="card-excerpt">{musing.excerpt}</p>
              <div className="card-topics">
                {musing.topics.map((topic, index) => (
                  <span key={index} className="topic-tag">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="card-footer">
                <span className="read-more">Read more →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Musings;
