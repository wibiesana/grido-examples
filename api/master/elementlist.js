
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","Exception"],["m","Exception::__construct()"],["m","Exception::__toString()"],["m","Exception::getCode()"],["m","Exception::getFile()"],["m","Exception::getLine()"],["m","Exception::getMessage()"],["m","Exception::getPrevious()"],["m","Exception::getTrace()"],["m","Exception::getTraceAsString()"],["c","Grido\\Components\\Actions\\Action"],["m","Grido\\Components\\Actions\\Action::__construct()"],["m","Grido\\Components\\Actions\\Action::getElementPrototype()"],["m","Grido\\Components\\Actions\\Action::getOption()"],["m","Grido\\Components\\Actions\\Action::getOptions()"],["m","Grido\\Components\\Actions\\Action::render()"],["m","Grido\\Components\\Actions\\Action::setConfirm()"],["m","Grido\\Components\\Actions\\Action::setCustomRender()"],["m","Grido\\Components\\Actions\\Action::setDisable()"],["m","Grido\\Components\\Actions\\Action::setElementPrototype()"],["m","Grido\\Components\\Actions\\Action::setIcon()"],["m","Grido\\Components\\Actions\\Action::setOption()"],["m","Grido\\Components\\Actions\\Action::setPrimaryKey()"],["c","Grido\\Components\\Actions\\Event"],["m","Grido\\Components\\Actions\\Event::__construct()"],["m","Grido\\Components\\Actions\\Event::setOnClick()"],["c","Grido\\Components\\Actions\\Href"],["m","Grido\\Components\\Actions\\Href::__construct()"],["m","Grido\\Components\\Actions\\Href::getArguments()"],["m","Grido\\Components\\Actions\\Href::setCustomHref()"],["c","Grido\\Components\\Columns\\Column"],["m","Grido\\Components\\Columns\\Column::__construct()"],["m","Grido\\Components\\Columns\\Column::applyReplacement()"],["m","Grido\\Components\\Columns\\Column::formatValue()"],["m","Grido\\Components\\Columns\\Column::getCellPrototype()"],["m","Grido\\Components\\Columns\\Column::getHeaderPrototype()"],["m","Grido\\Components\\Columns\\Column::getValue()"],["m","Grido\\Components\\Columns\\Column::setCellCallback()"],["m","Grido\\Components\\Columns\\Column::setColumn()"],["m","Grido\\Components\\Columns\\Column::setCustomRender()"],["m","Grido\\Components\\Columns\\Column::setCustomRenderExport()"],["m","Grido\\Components\\Columns\\Column::setDefaultSort()"],["m","Grido\\Components\\Columns\\Column::setFilterCheck()"],["m","Grido\\Components\\Columns\\Column::setFilterCustom()"],["m","Grido\\Components\\Columns\\Column::setFilterDate()"],["m","Grido\\Components\\Columns\\Column::setFilterNumber()"],["m","Grido\\Components\\Columns\\Column::setFilterSelect()"],["m","Grido\\Components\\Columns\\Column::setFilterText()"],["m","Grido\\Components\\Columns\\Column::setReplacement()"],["m","Grido\\Components\\Columns\\Column::setSortable()"],["c","Grido\\Components\\Columns\\Date"],["m","Grido\\Components\\Columns\\Date::__construct()"],["m","Grido\\Components\\Columns\\Date::formatValue()"],["m","Grido\\Components\\Columns\\Date::getDateFormat()"],["m","Grido\\Components\\Columns\\Date::setDateFormat()"],["c","Grido\\Components\\Columns\\Href"],["m","Grido\\Components\\Columns\\Href::formatValue()"],["c","Grido\\Components\\Columns\\Mail"],["m","Grido\\Components\\Columns\\Mail::formatValue()"],["c","Grido\\Components\\Columns\\Number"],["m","Grido\\Components\\Columns\\Number::__construct()"],["m","Grido\\Components\\Columns\\Number::formatValue()"],["m","Grido\\Components\\Columns\\Number::getNumberFormat()"],["m","Grido\\Components\\Columns\\Number::setNumberFormat()"],["c","Grido\\Components\\Columns\\Text"],["m","Grido\\Components\\Columns\\Text::formatValue()"],["m","Grido\\Components\\Columns\\Text::setTruncate()"],["c","Grido\\Components\\Component"],["m","Grido\\Components\\Component::addComponentToGrid()"],["m","Grido\\Components\\Component::getForm()"],["m","Grido\\Components\\Component::getGrid()"],["m","Grido\\Components\\Component::getPropertyAccessor()"],["m","Grido\\Components\\Component::translate()"],["c","Grido\\Components\\Container"],["m","Grido\\Components\\Container::addActionEvent()"],["m","Grido\\Components\\Container::addActionHref()"],["m","Grido\\Components\\Container::addColumnDate()"],["m","Grido\\Components\\Container::addColumnHref()"],["m","Grido\\Components\\Container::addColumnMail()"],["m","Grido\\Components\\Container::addColumnNumber()"],["m","Grido\\Components\\Container::addColumnText()"],["m","Grido\\Components\\Container::addFilterCheck()"],["m","Grido\\Components\\Container::addFilterCustom()"],["m","Grido\\Components\\Container::addFilterDate()"],["m","Grido\\Components\\Container::addFilterNumber()"],["m","Grido\\Components\\Container::addFilterSelect()"],["m","Grido\\Components\\Container::addFilterText()"],["m","Grido\\Components\\Container::getAction()"],["m","Grido\\Components\\Container::getColumn()"],["m","Grido\\Components\\Container::getExport()"],["m","Grido\\Components\\Container::getFilter()"],["m","Grido\\Components\\Container::getOperation()"],["m","Grido\\Components\\Container::setExport()"],["m","Grido\\Components\\Container::setOperation()"],["c","Grido\\Components\\Export"],["m","Grido\\Components\\Export::__construct()"],["m","Grido\\Components\\Export::generateCsv()"],["m","Grido\\Components\\Export::send()"],["c","Grido\\Components\\Filters\\Check"],["m","Grido\\Components\\Filters\\Check::getFormControl()"],["c","Grido\\Components\\Filters\\Condition"],["m","Grido\\Components\\Filters\\Condition::__construct()"],["m","Grido\\Components\\Filters\\Condition::__toArray()"],["m","Grido\\Components\\Filters\\Condition::getCallback()"],["m","Grido\\Components\\Filters\\Condition::getColumn()"],["m","Grido\\Components\\Filters\\Condition::getColumnWithoutOperator()"],["m","Grido\\Components\\Filters\\Condition::getCondition()"],["m","Grido\\Components\\Filters\\Condition::getValue()"],["m","Grido\\Components\\Filters\\Condition::getValueForColumn()"],["m","Grido\\Components\\Filters\\Condition::isOperator()"],["m","Grido\\Components\\Filters\\Condition::setColumn()"],["m","Grido\\Components\\Filters\\Condition::setCondition()"],["m","Grido\\Components\\Filters\\Condition::setup()"],["m","Grido\\Components\\Filters\\Condition::setupEmpty()"],["m","Grido\\Components\\Filters\\Condition::setupFromArray()"],["m","Grido\\Components\\Filters\\Condition::setupFromCallback()"],["m","Grido\\Components\\Filters\\Condition::setValue()"],["c","Grido\\Components\\Filters\\Custom"],["m","Grido\\Components\\Filters\\Custom::__construct()"],["c","Grido\\Components\\Filters\\Date"],["m","Grido\\Components\\Filters\\Date::getFormControl()"],["c","Grido\\Components\\Filters\\Filter"],["m","Grido\\Components\\Filters\\Filter::__construct()"],["m","Grido\\Components\\Filters\\Filter::formatValue()"],["m","Grido\\Components\\Filters\\Filter::getCondition()"],["m","Grido\\Components\\Filters\\Filter::getWrapperPrototype()"],["m","Grido\\Components\\Filters\\Filter::setColumn()"],["m","Grido\\Components\\Filters\\Filter::setCondition()"],["m","Grido\\Components\\Filters\\Filter::setDefaultValue()"],["m","Grido\\Components\\Filters\\Filter::setFormatValue()"],["m","Grido\\Components\\Filters\\Filter::setWhere()"],["c","Grido\\Components\\Filters\\Number"],["m","Grido\\Components\\Filters\\Number::getFormControl()"],["c","Grido\\Components\\Filters\\Select"],["m","Grido\\Components\\Filters\\Select::__construct()"],["m","Grido\\Components\\Filters\\Select::getFormControl()"],["c","Grido\\Components\\Filters\\Text"],["m","Grido\\Components\\Filters\\Text::getFormControl()"],["m","Grido\\Components\\Filters\\Text::setSuggestion()"],["m","Grido\\Components\\Filters\\Text::setSuggestionCallback()"],["m","Grido\\Components\\Filters\\Text::setSuggestionLimit()"],["c","Grido\\Components\\Operation"],["m","Grido\\Components\\Operation::__construct()"],["m","Grido\\Components\\Operation::getPrimaryKey()"],["m","Grido\\Components\\Operation::setConfirm()"],["m","Grido\\Components\\Operation::setPrimaryKey()"],["c","Grido\\Components\\Paginator"],["m","Grido\\Components\\Paginator::getCountBegin()"],["m","Grido\\Components\\Paginator::getCountEnd()"],["m","Grido\\Components\\Paginator::getPage()"],["m","Grido\\Components\\Paginator::getSteps()"],["m","Grido\\Components\\Paginator::setGrid()"],["c","Grido\\DataSources\\ArraySource"],["m","Grido\\DataSources\\ArraySource::__construct()"],["m","Grido\\DataSources\\ArraySource::compare()"],["m","Grido\\DataSources\\ArraySource::filter()"],["m","Grido\\DataSources\\ArraySource::getCount()"],["m","Grido\\DataSources\\ArraySource::getData()"],["m","Grido\\DataSources\\ArraySource::limit()"],["m","Grido\\DataSources\\ArraySource::makeWhere()"],["m","Grido\\DataSources\\ArraySource::sort()"],["m","Grido\\DataSources\\ArraySource::suggest()"],["c","Grido\\DataSources\\DibiFluent"],["m","Grido\\DataSources\\DibiFluent::__construct()"],["m","Grido\\DataSources\\DibiFluent::filter()"],["m","Grido\\DataSources\\DibiFluent::getCount()"],["m","Grido\\DataSources\\DibiFluent::getData()"],["m","Grido\\DataSources\\DibiFluent::getFluent()"],["m","Grido\\DataSources\\DibiFluent::getLimit()"],["m","Grido\\DataSources\\DibiFluent::getOffset()"],["m","Grido\\DataSources\\DibiFluent::limit()"],["m","Grido\\DataSources\\DibiFluent::makeWhere()"],["m","Grido\\DataSources\\DibiFluent::sort()"],["m","Grido\\DataSources\\DibiFluent::suggest()"],["c","Grido\\DataSources\\Doctrine"],["m","Grido\\DataSources\\Doctrine::__construct()"],["m","Grido\\DataSources\\Doctrine::filter()"],["m","Grido\\DataSources\\Doctrine::getCount()"],["m","Grido\\DataSources\\Doctrine::getData()"],["m","Grido\\DataSources\\Doctrine::getFilterMapping()"],["m","Grido\\DataSources\\Doctrine::getQb()"],["m","Grido\\DataSources\\Doctrine::getQuery()"],["m","Grido\\DataSources\\Doctrine::getRand()"],["m","Grido\\DataSources\\Doctrine::getSortMapping()"],["m","Grido\\DataSources\\Doctrine::limit()"],["m","Grido\\DataSources\\Doctrine::makeWhere()"],["m","Grido\\DataSources\\Doctrine::sort()"],["m","Grido\\DataSources\\Doctrine::suggest()"],["c","Grido\\DataSources\\IDataSource"],["m","Grido\\DataSources\\IDataSource::filter()"],["m","Grido\\DataSources\\IDataSource::getCount()"],["m","Grido\\DataSources\\IDataSource::getData()"],["m","Grido\\DataSources\\IDataSource::limit()"],["m","Grido\\DataSources\\IDataSource::sort()"],["m","Grido\\DataSources\\IDataSource::suggest()"],["c","Grido\\DataSources\\Model"],["m","Grido\\DataSources\\Model::__call()"],["m","Grido\\DataSources\\Model::__construct()"],["m","Grido\\DataSources\\Model::getDataSource()"],["c","Grido\\DataSources\\NetteDatabase"],["m","Grido\\DataSources\\NetteDatabase::__construct()"],["m","Grido\\DataSources\\NetteDatabase::filter()"],["m","Grido\\DataSources\\NetteDatabase::getCount()"],["m","Grido\\DataSources\\NetteDatabase::getData()"],["m","Grido\\DataSources\\NetteDatabase::getSelection()"],["m","Grido\\DataSources\\NetteDatabase::limit()"],["m","Grido\\DataSources\\NetteDatabase::makeWhere()"],["m","Grido\\DataSources\\NetteDatabase::sort()"],["m","Grido\\DataSources\\NetteDatabase::suggest()"],["c","Grido\\Grid"],["m","Grido\\Grid::applyFiltering()"],["m","Grido\\Grid::applyPaging()"],["m","Grido\\Grid::applySorting()"],["m","Grido\\Grid::createComponentForm()"],["m","Grido\\Grid::getActualFilter()"],["m","Grido\\Grid::getCount()"],["m","Grido\\Grid::getData()"],["m","Grido\\Grid::getDefaultFilter()"],["m","Grido\\Grid::getDefaultPerPage()"],["m","Grido\\Grid::getDefaultSort()"],["m","Grido\\Grid::getItemsForCountSelect()"],["m","Grido\\Grid::getPerPage()"],["m","Grido\\Grid::getPerPageList()"],["m","Grido\\Grid::getPrimaryKey()"],["m","Grido\\Grid::getRememberSession()"],["m","Grido\\Grid::getRememberState()"],["m","Grido\\Grid::getRowCallback()"],["m","Grido\\Grid::getTablePrototype()"],["m","Grido\\Grid::getTranslator()"],["m","Grido\\Grid::saveRememberState()"],["m","Grido\\Grid::setClientSideOptions()"],["m","Grido\\Grid::setDefaultFilter()"],["m","Grido\\Grid::setDefaultPerPage()"],["m","Grido\\Grid::setDefaultSort()"],["m","Grido\\Grid::setFilterRenderType()"],["m","Grido\\Grid::setModel()"],["m","Grido\\Grid::setPaginator()"],["m","Grido\\Grid::setPerPageList()"],["m","Grido\\Grid::setPrimaryKey()"],["m","Grido\\Grid::setPropertyAccessor()"],["m","Grido\\Grid::setRememberState()"],["m","Grido\\Grid::setRowCallback()"],["m","Grido\\Grid::setTemplateFile()"],["m","Grido\\Grid::setTranslator()"],["c","Grido\\PropertyAccessors\\ArrayObjectAccessor"],["m","Grido\\PropertyAccessors\\ArrayObjectAccessor::getProperty()"],["m","Grido\\PropertyAccessors\\ArrayObjectAccessor::setProperty()"],["c","Grido\\PropertyAccessors\\IPropertyAccessor"],["m","Grido\\PropertyAccessors\\IPropertyAccessor::getProperty()"],["m","Grido\\PropertyAccessors\\IPropertyAccessor::setProperty()"],["c","Grido\\PropertyAccessors\\PropertyAccessorException"],["c","Grido\\Translations\\FileTranslator"],["m","Grido\\Translations\\FileTranslator::__construct()"],["m","Grido\\Translations\\FileTranslator::getTranslationsFromFile()"],["m","Grido\\Translations\\FileTranslator::setLang()"],["m","Grido\\Translations\\FileTranslator::translate()"],["c","InvalidArgumentException"],["c","LogicException"]];
